/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { toBigNumber } from './toBigNum';

import type { BigNumLike } from './BigNumLike';

interface Format {
  /** The string to prepend. */
  prefix?: string;

  /** The decimal separator. */
  decimalSeparator?: string;

  /** The grouping separator of the integer part. */
  groupSeparator?: string;

  /** The primary grouping size of the integer part. */
  groupSize?: number;

  /** The secondary grouping size of the integer part. */
  secondaryGroupSize?: number;

  /** The grouping separator of the fraction part. */
  fractionGroupSeparator?: string;

  /** The grouping size of the fraction part. */
  fractionGroupSize?: number;

  /** The string to append. */
  suffix?: string;
}

export function toFormat(val: BigNumLike, format: Format): string {
  return toBigNumber(val).toFormat(format);
}
