/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { isEmpty } from './isEmpty';

export function parseInt(obj: any, defaultVal?: number): number | undefined {
  if (isEmpty(obj)) {
    return defaultVal;
  }

  try {
    const out = Number.parseInt(obj, 10);

    return Number.isNaN(out) ? defaultVal : out;
  } catch (e: any) {
    return defaultVal;
  }
}
