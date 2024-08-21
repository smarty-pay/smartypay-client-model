/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

export interface CacheItem<V> {
  data: V;
  expireTime: number;
}

/**
 * Simple Map based cache with TTL expiring logic
 */
export class SimpleTtlCache<K, V> {
  private map = new Map<K, CacheItem<V>>();

  set(key: K, data: V, ttl: number) {
    this.map.set(key, {
      data,
      expireTime: ttl > 0 ? Date.now() + ttl : 0,
    });
  }

  get(key: K): V | undefined {
    const cached = this.map.get(key);

    // no key
    if (!cached) {
      return undefined;
    }

    const now = Date.now();
    const validTtl = cached.expireTime === 0 || cached.expireTime >= now;

    if (validTtl) {
      return cached.data;
    }

    this.map.delete(key);
    return undefined;
  }

  delete(key: K): boolean {
    return this.map.delete(key);
  }

  clear() {
    this.map.clear();
  }

  size() {
    return this.map.size;
  }

  cleanUp(): number {
    const now = Date.now();
    const keysToDelete: K[] = [];

    // finding expired items
    this.map.forEach((value, key) => {
      if (value.expireTime > 0 && value.expireTime < now) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach((key) => this.map.delete(key));
    return keysToDelete.length;
  }
}
