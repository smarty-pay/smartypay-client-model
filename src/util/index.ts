/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {ListenersMap, Event, EventListener} from './ListenersMap';
import {KeysOfType} from './KeysOfType';

export {
  ListenersMap,
  Event,
  EventListener,
  KeysOfType,
};

export type AnyFunc = (...args: any[])=>void;

export function makeError(prefix: string, ...args: any[]){
  return new Error(`${prefix}: ${args.join(' ')}`);
}

export function errorCtx(error: any, ctx: any): Error {
  Object.entries(ctx).forEach(([key, value])=>{
    error[key] = value;
  });
  return error;
}

export function waitTimeout(ms: number){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, ms)
  });
}

export function isNode(){
  return typeof window === 'undefined';
}
