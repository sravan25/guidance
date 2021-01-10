import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  @Input('itemList') itemList:Object;
  @Output('modifiedItem') editItem = new EventEmitter<Object>();
  items:String[];
  constructor() { 

  }

  onEditItem(item:Object) {
    console.log("item = =",item);
    this.editItem.emit(item);
  }

  ngOnInit(): void {
    this.items = [];
    Object.keys(this.itemList).forEach(item => {
      this.items.push(item)
    })
  }
}
