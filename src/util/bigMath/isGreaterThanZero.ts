/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { toBigNumber } from './toBigNum';

import type { BigNumLike } from './BigNumLike';

/** a > 0 */
export function isGreaterThanZero(a: BigNumLike) {
  const normA = toBigNumber(a);
  return normA.isGreaterThan(0);
}
