/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { toBigNumber } from '../bigMath';

import type { BigNumLike } from '../bigMath';

export function toHexString(val: number | BigNumLike) {
  return `0x${toBigNumber(val).toString(16)}`;
}
