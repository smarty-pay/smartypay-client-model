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

  describe('fireEvent', ()=> {

    test('should call every listener', () => {

      let calls: any[] = [];

      const fn1 = (...args: any[])=>{
        calls.push('fn1');
        if(args.length > 0){
          calls.push([...args]);
        }
      };
      const fn2 = (...args: any[])=>{
        calls.push('fn2');
        if(args.length > 0){
          calls.push([...args]);
        }
      };

      const map = new ListenersMap();
      map.addListener(key1, fn1);
      map.addListener(key1, fn2);
      map.addListener(key2, fn1);

      calls = [];
      map.fireEvent(key1);
      expect(calls).toEqual(['fn1', 'fn2']);

      calls = [];
      map.fireEvent(key1, 1, '2');
      expect(calls).toEqual(['fn1', [1, '2'], 'fn2', [1, '2']]);

      calls = [];
      map.fireEvent(key2);
      expect(calls).toEqual(['fn1']);
    });
  });

  describe('getListeners', ()=> {

    test('should return new collection', () => {
      const map = new ListenersMap();
      map.addListener(key1, fn1);

      map.getListeners(key1).push(fn2);

      expect(map.getListeners(key1)).toEqual([fn1]);
      expect(map.getListenerKeys(fn1)).toEqual([key1]);
    });
  });

  describe('getListenerKeys', ()=> {

    test('should return new collection', () => {
      const map = new ListenersMap();
      map.addListener(key1, fn1);

      map.getListenerKeys(fn1).push(key2);

      expect(map.getListeners(key1)).toEqual([fn1]);
      expect(map.getListenerKeys(fn1)).toEqual([key1]);
    });
  });

  describe('addListener', ()=>{

    test('should add by key with no duplicates',()=>{

      const map = new ListenersMap();
      expect(map.getListeners(key1)).toEqual([]);
      expect(map.getListenerKeys(fn1)).toEqual([]);

      map.addListener(key1, fn1);
      map.addListener(key1, fn1);
      map.addListener(key1, fn2);

      expect(map.getListeners(key1)).toEqual([fn1, fn2]);
      expect(map.getListeners(key2)).toEqual([]);

      expect(map.getListenerKeys(fn1)).toEqual([key1]);
      expect(map.getListenerKeys(fn2)).toEqual([key1]);
    });

    test('should support multi keys',()=>{

      const map = new ListenersMap();
      expect(map.getListeners(key1)).toEqual([]);
      expect(map.getListenerKeys(fn1)).toEqual([]);

      map.addListener(key1, fn1);
      map.addListener(key2, fn1);

      expect(map.getListeners(key1)).toEqual([fn1]);
      expect(map.getListenerKeys(fn1)).toEqual([key1, key2]);
    });
  });

  describe('removeListenerForKey', ()=>{

    test('should remove by function', ()=>{

      const map = new ListenersMap();

      map.addListener(key1, fn1);
      map.addListener(key1, fn2);
      expect(map.getListeners(key1)).toEqual([fn1, fn2]);
      expect(map.getListenerKeys(fn1)).toEqual([key1]);
      expect(map.getListenerKeys(fn2)).toEqual([key1]);

      map.removeListenerForKey(key1, fn3);
      expect(map.getListeners(key1)).toEqual([fn1, fn2]);
      expect(map.getListenerKeys(fn1)).toEqual([key1]);
      expect(map.getListenerKeys(fn2)).toEqual([key1]);

      map.removeListenerForKey(key2, fn1);
      expect(map.getListeners(key1)).toEqual([fn1, fn2]);
      expect(map.getListenerKeys(fn1)).toEqual([key1]);
      expect(map.getListenerKeys(fn2)).toEqual([key1]);

      map.removeListenerForKey(key1, fn1);
      expect(map.getListeners(key1)).toEqual([fn2]);
      expect(map.getListenerKeys(fn1)).toEqual([]);
      expect(map.getListenerKeys(fn2)).toEqual([key1]);

      map.removeListenerForKey(key1, fn2);
      expect(map.getListeners(key1)).toEqual([]);
      expect(map.getListenerKeys(fn1)).toEqual([]);
      expect(map.getListenerKeys(fn2)).toEqual([]);
    })
  });


  describe('removeListener', ()=>{

    test('should remove by keys', ()=>{

      const map = new ListenersMap();

      map.addListener(key1, fn1);
      map.addListener(key2, fn2);
      map.addListener(key2, fn1);
      expect(map.getListeners(key1)).toEqual([fn1]);
      expect(map.getListeners(key2)).toEqual([fn2, fn1]);
      expect(map.getListenerKeys(fn1)).toEqual([key1, key2]);
      expect(map.getListenerKeys(fn2)).toEqual([key2]);

      map.removeListener(fn1);
      expect(map.getListeners(key1)).toEqual([]);
      expect(map.getListeners(key2)).toEqual([fn2]);
      expect(map.getListenerKeys(fn1)).toEqual([]);
      expect(map.getListenerKeys(fn2)).toEqual([key2]);

      map.removeListener(fn2);
      expect(map.getListeners(key1)).toEqual([]);
      expect(map.getListeners(key2)).toEqual([]);
      expect(map.getListenerKeys(fn1)).toEqual([]);
      expect(map.getListenerKeys(fn2)).toEqual([]);
    });
  });


  describe('removeListeners', ()=>{

    test('should remove by key', ()=>{

      const map = new ListenersMap();

      map.addListener(key1, fn1);
      map.addListener(key2, fn2);
      expect(map.getListeners(key1)).toEqual([fn1]);
      expect(map.getListeners(key2)).toEqual([fn2]);
      expect(map.getListenerKeys(fn1)).toEqual([key1]);
      expect(map.getListenerKeys(fn2)).toEqual([key2]);

      map.removeListeners(key1)
      expect(map.getListeners(key1)).toEqual([]);
      expect(map.getListeners(key2)).toEqual([fn2]);
      expect(map.getListenerKeys(fn1)).toEqual([]);
      expect(map.getListenerKeys(fn2)).toEqual([key2]);

      map.removeListeners(key2)
      expect(map.getListeners(key1)).toEqual([]);
      expect(map.getListeners(key2)).toEqual([]);
      expect(map.getListenerKeys(fn1)).toEqual([]);
      expect(map.getListenerKeys(fn2)).toEqual([]);
    })
  })


  describe('removeAllListeners', ()=>{
    test('should remove all', ()=>{

      const map = new ListenersMap();

      map.addListener(key1, fn1);
      map.addListener(key2, fn2);
      expect(map.getListeners(key1)).toEqual([fn1]);
      expect(map.getListeners(key2)).toEqual([fn2]);
      expect(map.getListenerKeys(fn1)).toEqual([key1]);
      expect(map.getListenerKeys(fn2)).toEqual([key2]);

      map.removeAllListeners();
      expect(map.getListeners(key1)).toEqual([]);
      expect(map.getListeners(key2)).toEqual([]);
      expect(map.getListenerKeys(fn1)).toEqual([]);
      expect(map.getListenerKeys(fn2)).toEqual([]);
    })
  })

})


