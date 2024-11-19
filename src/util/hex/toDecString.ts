/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { toBigNumber } from '../bigMath';

import type { BigNumLike } from '../bigMath';

export function toDecString(val: number | BigNumLike): string {
  return toBigNumber(val).toString(10);
}
