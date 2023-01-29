/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/


import {ListenersMap} from './ListenersMap';

describe('ListenersMap', ()=>{

  const key1 = 'key1';
  const key2 = 'key2';
  const fn1 = ()=>{/**/};
  const fn2 = ()=>{/**/};
  const fn3 = ()=>{/**/};

  describe('addListener', ()=>{
    test('should add by key with no duplicates',()=>{

      const map = new ListenersMap();
      expect(map.getListeners(key1)).toEqual([]);

      map.addListener(key1, fn1);
      map.addListener(key1, fn1);
      map.addListener(key1, fn2);

      expect(map.getListeners(key1)).toEqual([fn1, fn2]);
      expect(map.getListeners(key2)).toEqual([]);
    });
  });

  describe('removeListener', ()=>{
    test('should remove by function', ()=>{

      const map = new ListenersMap();

      map.addListener(key1, fn1);
      map.addListener(key1, fn2);
      expect(map.getListeners(key1)).toEqual([fn1, fn2]);

      map.removeListener(key1, fn3);
      expect(map.getListeners(key1)).toEqual([fn1, fn2]);

      map.removeListener(key2, fn1);
      expect(map.getListeners(key1)).toEqual([fn1, fn2]);

      map.removeListener(key1, fn1);
      expect(map.getListeners(key1)).toEqual([fn2]);

      map.removeListener(key1, fn2);
      expect(map.getListeners(key1)).toEqual([]);
    })
  })


  describe('removeListeners', ()=>{
    test('should remove by key', ()=>{

      const map = new ListenersMap();

      map.addListener(key1, fn1);
      map.addListener(key2, fn2);
      expect(map.getListeners(key1)).toEqual([fn1]);
      expect(map.getListeners(key2)).toEqual([fn2]);

      map.removeListeners(key1)
      expect(map.getListeners(key1)).toEqual([]);
      expect(map.getListeners(key2)).toEqual([fn2]);

      map.removeListeners(key2)
      expect(map.getListeners(key1)).toEqual([]);
      expect(map.getListeners(key2)).toEqual([]);
    })
  })


  describe('removeAllListeners', ()=>{
    test('should remove all', ()=>{

      const map = new ListenersMap();

      map.addListener(key1, fn1);
      map.addListener(key2, fn2);
      expect(map.getListeners(key1)).toEqual([fn1]);
      expect(map.getListeners(key2)).toEqual([fn2]);

      map.removeAllListeners();
      expect(map.getListeners(key1)).toEqual([]);
      expect(map.getListeners(key2)).toEqual([]);
    })
  })

})


