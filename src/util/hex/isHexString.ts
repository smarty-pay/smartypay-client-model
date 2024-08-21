/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

export function isHexString(val: string) {
  return /^[0-9a-fA-F]+$/.test(val);
}
