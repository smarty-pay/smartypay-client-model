/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {AnyFunc} from './index';


export class ListenersMap<T> {

  private map = new Map<string, AnyFunc[]>();
  private fnKeys = new Map<AnyFunc, string[]>();
  public logFireEvents = false;

  public getListeners(key: T): AnyFunc[] {
    return [...(this.map.get(key as any) || [])];
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
      this.removeListenerForKey(key as any, listener);
    })
  }

  public removeListenerForKey(key: T, listener: AnyFunc){
    let list = this.map.get(key as any);
    if(list){
      list = list.filter(l => l !== listener);
      if(list.length > 0){
        this.map.set(key as any, list);
      } else {
        this.map.delete(key as any);
      }
    }

    let keys = this.fnKeys.get(listener);
    if(keys){
      keys = keys.filter(k => k !== (key as any));
      if(keys.length > 0){
        this.fnKeys.set(listener, keys);
      } else {
        this.fnKeys.delete(listener);
      }
    }
  }

  public removeListeners(key: T){
    const listeners = this.map.get(key as any) || [];
    listeners.forEach(listener => {
      this.removeListenerForKey(key, listener);
    });
  }

  public removeAllListeners(){
    this.map.clear();
    this.fnKeys.clear();
  }

  public fireEvent(key: T, ...args: any[]){
    if(this.logFireEvents){
      console.log('ListenersMap: fire event', key, args);
    }
    this.getListeners(key).forEach(l => l(...args));
  }

}