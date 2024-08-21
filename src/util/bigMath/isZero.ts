/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { toBigNumber } from './toBigNum';

import type { BigNumLike } from './BigNumLike';

/** a == 0 */
export function isZero(a: BigNumLike) {
  const normA = toBigNumber(a);
  return normA.eq(0);
}
