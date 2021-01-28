import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {

  disable:boolean = false;
  time:string = "";
  name:string = "";
  errBgColor:string;
  itemName:string = "";
  //itemNames:string[]
  items:Object[] =[];
  @Output('sendItems') itemsToExport = new EventEmitter<Object>()

  constructor() { }

  ngOnInit(): void {
  }

  updateDiet(event:Event){

  }

  selectName() {

    console.log(" name ==",this.itemName)

  }
  
  onSubmit() {
    this.items.push({
      name:this.itemName,
      value:this.name,
      time:this.time
    })
    console.log(" items -- ",this.items);
    this.itemsToExport.emit(this.items)
   
  }

}
