/*
  SMARTy Pay Client Model
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {AnyFunc} from './index';


export class ListenersMap {

  private map = new Map<string, AnyFunc[]>();

  public getListeners(key: string): AnyFunc[] {
    return this.map.get(key) || [];
  }

  public addListener(key: string, listener: AnyFunc){
    let list = this.map.get(key);
    if( ! list){
      list = [];
      this.map.set(key, list);
    }

    // skip duplicate
    if(list.find(l => l === listener))
      return;

    list.push(listener);
  }

  public removeListener(key: string, listener: AnyFunc){
    let list = this.map.get(key);
    if(list){
      list = list.filter(l => l !== listener);
      if(list.length > 0){
        this.map.set(key, list);
      } else {
        this.map.delete(key);
      }
    }
  }

  public removeListeners(key: string){
    this.map.delete(key);
  }

  public removeAllListeners(){
    this.map.clear();
  }

}