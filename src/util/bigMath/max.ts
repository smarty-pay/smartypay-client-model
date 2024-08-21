/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import BigNumber from 'bignumber.js';

import { toBigNumber } from './toBigNum';

import type { BigNumLike } from './BigNumLike';

/**
 * Analog for
 * @link Math.max
 */
export function max(...values: BigNumLike[]): string {
  return maxImpl(...values.map((val) => toBigNumber(val))).toString();
}

export function maxImpl(...values: BigNumber[]): BigNumber {
  let out = new BigNumber(-Infinity);

  values.forEach((val) => {
    if (!out || val.gt(out)) {
      out = val;
    }
  });

  return out;
}
