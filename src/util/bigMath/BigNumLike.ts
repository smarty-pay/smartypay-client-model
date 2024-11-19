/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/
import type BigNumber from 'bignumber.js';

// there is no numeric type to protect against implicit floating point arithmetic
export type BigNumLike = string | BigNumber | bigint;
