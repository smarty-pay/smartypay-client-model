/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {ListenersMap} from './ListenersMap';
import {KeysOfType} from './KeysOfType';

export {
  ListenersMap,
  KeysOfType,
};

export type AnyFunc = (...args: any[])=>void;

export function makeError(prefix: string, ...args: any[]){
  return new Error(`${prefix}: ${args.join(' ')}`);
}
