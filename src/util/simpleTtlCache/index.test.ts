/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/
import { waitTimeout } from '../index';

import { SimpleTtlCache } from './index';

describe('SimpleTtlCache', () => {
  describe('ttl', () => {
    test('should delete after ttl', async () => {
      const key1 = 1;
      const val1 = 'a';
      const ttl = 50;
      const cache = new SimpleTtlCache<number, string>();

      cache.set(key1, val1, ttl);

      // valid ttl
      expect(cache.get(key1)).toBe(val1);
      expect(cache.size()).toBe(1);

      // valid ttl
      await waitTimeout(ttl / 2);
      expect(cache.get(key1)).toBe(val1);
      expect(cache.size()).toBe(1);

      // invalid ttl
      await waitTimeout(ttl / 2 + 1);
      expect(cache.get(key1)).toBe(undefined);
      expect(cache.size()).toBe(0);
    });

    test('support no ttl', async () => {
      const key1 = 1;
      const val1 = 'a';
      const cache = new SimpleTtlCache<number, string>();

      // no ttl
      cache.set(key1, val1, 0);

      // valid ttl
      expect(cache.get(key1)).toBe(val1);
      expect(cache.size()).toBe(1);

      // valid ttl
      await waitTimeout(10);
      expect(cache.get(key1)).toBe(val1);
      expect(cache.size()).toBe(1);

      // clear
      cache.delete(key1);
      expect(cache.get(key1)).toBe(undefined);
      expect(cache.size()).toBe(0);
    });
  });
});
