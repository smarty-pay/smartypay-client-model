/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { toBigNumber } from './toBigNum';

import type { BigNumLike } from './BigNumLike';

/** a == b */
export function isEqualTo(a: BigNumLike, b: BigNumLike) {
  const normA = toBigNumber(a);
  const normB = toBigNumber(b);
  return normA.eq(normB);
}