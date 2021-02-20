import { Component, Input, OnInit, Output,EventEmitter, OnChanges } from '@angular/core';
import {CommonService} from '../../common.service'
import {CommunicateService} from '../communicate.service'
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit,OnChanges {
  @Input('itemList') itemList:Object[] = [];
  
  
  prevItems:Object[] =[];
  items:Object[];
  constructor(private CommonService:CommonService, 
    private commuteService:CommunicateService,
    private router:Router,
    private route:ActivatedRoute) { 
  }

  onEditItem(item:{name:string,values:string,time:string}) {
    
    this.commuteService.raiseEvent(item);
    this.router.navigate(
      ['items',item.name],
      {relativeTo:this.route,queryParams:{allowEdit:"1",
      fragment:'loading'}}
    );
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
