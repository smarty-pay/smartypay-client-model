/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { isEmpty } from './isEmpty';

export function parseFloat(obj: any, defaultVal?: number): number | undefined {
  if (isEmpty(obj)) return defaultVal;

  try {
    const out = Number.parseFloat(obj);
    return Number.isNaN(out) ? defaultVal : out;
  } catch (e: any) {
    return defaultVal;
  }
}
