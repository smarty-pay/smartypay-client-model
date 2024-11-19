/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { toBigNumber } from './toBigNum';

import type { BigNumLike } from './BigNumLike';

export function minus(a: BigNumLike, b: BigNumLike): string {
  const normA = toBigNumber(a);
  const normB = toBigNumber(b);
  return normA.minus(normB).toString();
}
