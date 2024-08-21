/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

export { CacheItem, SimpleTtlCache } from './simpleTtlCache';
export { withSingleCall } from './promise/withSingleCall';
export { Event, EventListener, ListenersMap } from './listenersMap';

export * as bigMath from './bigMath';
export * as lang from './lang';

export type AnyFunc = (...args: any[]) => void;

export function makeError(prefix: string, ...args: any[]) {
  return new Error(`${prefix}: ${args.join(' ')}`);
}

export function errorCtx(error: any, ctx: any): Error {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  Object.entries(ctx).forEach(([key, value]) => {
    // eslint-disable-next-line no-param-reassign,@typescript-eslint/no-unsafe-member-access
    error[key] = value;
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return error;
}

export function waitTimeout(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, ms);
  });
}

export function isNode() {
  return typeof window === 'undefined';
}
