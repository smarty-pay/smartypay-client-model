/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {AnyFunc} from './index';


export class ListenersMap {

  private map = new Map<string, AnyFunc[]>();
  private fnKeys = new Map<AnyFunc, string[]>();

  public getListeners(key: string): AnyFunc[] {
    return [...(this.map.get(key) || [])];
  }

  public getTypedListeners<T>(key: T): AnyFunc[] {
    return this.getListeners(key as any);
  }

  public getListenerKeys(listener: AnyFunc): string[]{
    return [...(this.fnKeys.get(listener) || [])];
  }

  public addListener(key: string, listener: AnyFunc){

    let list = this.map.get(key);

    // skip duplicate
    if( list && list.find(l => l === listener)){
      return;
    }
    if( ! list){
      list = [];
      this.map.set(key, list);
    }

    list.push(listener);

    let keys = this.fnKeys.get(listener);
    if( ! keys){
      keys = [];
      this.fnKeys.set(listener, keys);
    }

    if( ! keys.find(k => k === key)){
      keys.push(key);
    }
  }

  public removeListener(listener: AnyFunc){
    const keys = this.fnKeys.get(listener) || [];
    keys.forEach(key => {
      this.removeListenerForKey(key, listener);
    })
  }

  public removeListenerForKey(key: string, listener: AnyFunc){
    let list = this.map.get(key);
    if(list){
      list = list.filter(l => l !== listener);
      if(list.length > 0){
        this.map.set(key, list);
      } else {
        this.map.delete(key);
      }
    }

    let keys = this.fnKeys.get(listener);
    if(keys){
      keys = keys.filter(k => k !== key);
      if(keys.length > 0){
        this.fnKeys.set(listener, keys);
      } else {
        this.fnKeys.delete(listener);
      }
    }
  }

  public removeListeners(key: string){
    const listeners = this.map.get(key) || [];
    listeners.forEach(listener => {
      this.removeListenerForKey(key, listener);
    });
  }

  public removeAllListeners(){
    this.map.clear();
    this.fnKeys.clear();
  }

}