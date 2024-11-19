/*
  Smarty Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

export function isBlank(str: string | undefined | null) {
  return str === null || str === undefined || str.length === 0;
}
