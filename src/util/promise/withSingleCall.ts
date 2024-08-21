interface SingleCall {
  listenersCount: number;
  promise: Promise<any>;
}

const singleCalls = new Map<string, SingleCall>();

export interface WithSingleCallProps {
  useLog?: boolean;
}

/**
 * All next callers will be wait first result
 */
export function withSingleCall<T>(
  callId: string,
  callCandidate: () => Promise<T>,
  props?: WithSingleCallProps,
): Promise<T> {
  let call = singleCalls.get(callId);
  if (!call) {
    if (props?.useLog) {
      console.log('SingleCall', `"${callId}"`, 'start single call');
    }

    const callInst = {
      // external promise wrapper
      promise: new Promise<T>((resolve, reject) => {
        callCandidate()
          .then((result) => resolve(result))
          .catch((e) => reject(e))
          .finally(() => {
            if (props?.useLog) {
              console.log('SingleCall', `"${callId}"`, 'end single call', { listeners: callInst.listenersCount });
            }

            singleCalls.delete(callId);
          });
      }),
      listenersCount: 1,
    };

    call = callInst;
    singleCalls.set(callId, call);
  } else {
    call.listenersCount++;

    if (props?.useLog) {
      console.log('SingleCall', `"${callId}"`, 'add listener to call', { listeners: call.listenersCount });
    }
  }

  return call.promise;
}
