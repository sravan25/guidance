import { ThrowStmt } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
  receiveObject:EventEmitter<Object>;
  itemData:Object;
  itemListData:Object[] =[];
  constructor() { 
    this.receiveObject = new EventEmitter<Object>();

  }

  raiseEvent(itemData:Object):void {
    this.itemData = itemData;
    console.log(" Service data == ",this.itemData);
   
    this.receiveObject.emit(itemData);
  }

  addData(itemData:Object):void {

    this.itemListData.push(itemData)
  }

  getItem() {

    return this.itemData;
  }

  getItems() {

    return this.itemListData;
  }
}
