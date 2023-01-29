/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {ListenersMap} from './ListenersMap';
import {KeysOfType} from './KeysOfType';

export type AnyFunc = (...args: any[])=>void;

export {
  ListenersMap,
  KeysOfType,
};