import { Component, Input, OnInit, Output,EventEmitter, OnChanges } from '@angular/core';
import {CommonService} from '../../common.service'
import {CommunicateService} from '../communicate.service'
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit,OnChanges {
  @Input('itemList') itemList:Object[] = [];
  
  
  prevItems:Object[] =[];
  items:Object[];
  constructor(private CommonService:CommonService, private commuteService:CommunicateService) { 
  }

  onEditItem(item:Object) {
    this.commuteService.raiseEvent(item);
  }

  ngOnInit(): void {
    console.log(" ngOnit == form list");
  }

 ngOnChanges(): void {
  this.CommonService.logInfo("formListComponent","ngOnchange");
  }

  ngDoCheck() {
    console.log(" ngDocheck --");
    if(this.itemList.length == 0 || (this.itemList.length !== this.prevItems.length)) {
     
      this.prevItems = [...this.itemList];
    }
  }
}
