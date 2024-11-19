/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import BigNumber from 'bignumber.js';

import { isBigint } from '../lang/isBigint';

import type { BigNumLike } from './BigNumLike';

export function toBigNumber(val: number | BigNumLike): BigNumber {
  // no need for a new instance
  if (BigNumber.isBigNumber(val)) {
    return val;
  }

  // BigNumber not supports the 'bigint' native type
  if (isBigint(val)) {
    // eslint-disable-next-line no-param-reassign
    val = val.toString();
  }

  return new BigNumber(val);
}
