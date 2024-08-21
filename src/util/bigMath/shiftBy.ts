/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { toBigNumber } from './toBigNum';

import type { BigNumLike } from './BigNumLike';

/**
 * Returns a string whose value is the value of this BigNumber shifted by `n` places.
 *
 * The shift is of the decimal point, i.e. of powers of ten, and is to the left if `n` is negative
 * or to the right if `n` is positive.
 *
 * The return value is always exact and unrounded.
 *
 * Throws if `n` is invalid.
 *
 * ```ts
 * const x = new BigNumber(1.23)
 * shiftBy(x, 3)    // '1230'
 * shiftBy(x, -3)   // '0.00123'
 * ```
 * @param bigVal The original value
 * @param decimals The shift value, integer, -9007199254740991 to 9007199254740991.
 */
export function shiftBy(bigVal: BigNumLike, decimals: number): string {
  return toBigNumber(bigVal).shiftedBy(decimals).toString();
}
