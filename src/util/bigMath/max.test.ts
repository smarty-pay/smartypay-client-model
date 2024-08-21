/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { max } from './max';
import { toBigNumber } from './toBigNum';

describe('bigMath/max', () => {
  test('should work like Math.max', () => {
    [[], [1, 1.1], [-1, -1.1], [Number.MIN_VALUE, 0, Number.MAX_VALUE]].forEach((vals) => {
      const nativeResult = Math.max(...vals);
      const target = toBigNumber(nativeResult);
      const result = toBigNumber(max(...vals.map((val) => val.toString())));

      try {
        expect(target.eq(result)).toBe(true);
      } catch (e) {
        console.log('failed max test:', nativeResult.toString(), result.toString());
        throw e;
      }
    });
  });
});
