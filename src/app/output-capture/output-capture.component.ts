import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import {CommunicateService} from '../communicate.service';
import {CommonService} from '../../common.service';
@Component({
  selector: 'app-output-capture',
  templateUrl: './output-capture.component.html',
  styleUrls: ['./output-capture.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class OutputCaptureComponent implements OnInit {

  output:String = "Hi world";
  itemObject:Object;

  constructor(private commService:CommunicateService,private commonService:CommonService) {

    this.commService.receiveObject.subscribe((param:Object)=>{
      this.itemObject = {...param}
      console.log("dfdsf",this.itemObject);
    
    });
   }

  getCapture() {

    console.log(" output ==",this.output);
  }

  ngOnInit(): void {
    
  }

  ngDoCheck() {
  //  this.commonService.logInfo("outputCapture log",this.itemObject);
  }

}
