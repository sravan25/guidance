import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
  receiveObject:EventEmitter<Object>;
  itemData:Object;
  constructor() { 
    this.receiveObject = new EventEmitter<Object>();

  }

  raiseEvent(itemData:Object):void {
    this.itemData = itemData;
    console.log(" Service data == ",this.itemData);
    this.receiveObject.emit(itemData);
  }
}
