/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import BigNumber from 'bignumber.js';

import { toBigNumber } from './toBigNum';

import type { BigNumLike } from './BigNumLike';

/**
 * Analog for
 * @link Math.ceil
 */
export function ceil(val: BigNumLike): string {
  const bigNum = toBigNumber(val);
  return ceilImpl(bigNum).toString();
}

export function ceilImpl(val: BigNumber) {
  return val.decimalPlaces(0, BigNumber.ROUND_CEIL);
}
