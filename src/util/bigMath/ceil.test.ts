/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { ceil } from './ceil';
import { toBigNumber } from './toBigNum';

describe('bigMath/ceil', () => {
  test('should work like Math.ceil', () => {
    [1, 1.4, 1.5, 1.6].forEach((val) => {
      const nativeResult = Math.ceil(val);
      const target = toBigNumber(nativeResult);
      const result = toBigNumber(ceil(val.toString()));

      try {
        expect(target.eq(result)).toBe(true);
      } catch (e) {
        console.log('failed ceil test:', nativeResult.toString(), result.toString());
        throw e;
      }
    });
  });
});
