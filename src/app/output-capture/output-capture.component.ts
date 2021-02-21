import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import {CommunicateService} from '../communicate.service';
import {CommonService} from '../../common.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-output-capture',
  templateUrl: './output-capture.component.html',
  styleUrls: ['./output-capture.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class OutputCaptureComponent implements OnInit {

  output:String = "Hi world";
  itemObject:Object;
  paramSub:Subscription;
  item:Object= {name:"",values:"",time:""};
  date:any = new Date().getTime();
  itemd:Object[] = [];

  constructor(private commService:CommunicateService,
    private commonService:CommonService,
    private route:ActivatedRoute) {

    this.commService.receiveObject.subscribe((param:Object)=>{
      this.itemObject = {...param}
      console.log("receive Object ",this.itemObject,new Date().getTime());
    });

    this.commService.subObject.subscribe((param: boolean) => {
      console.log("subject Obect",param,new Date().getTime());
    });
   }

  getCapture() {

    console.log(" output ==",this.output);
  }

  ngOnInit(): void {
    console.log("routing params = ",this.route.snapshot.params['name'])
    //this.route.snapshot.queryParams;
    //this.route.snapshot.fragement
    this.paramSub = this.route.params.subscribe((params:Params) =>{
     
      if(params["name"] === "all") {
          this.itemd = this.commService.getItems();
      } else {
        this.itemObject =  this.commService.getItem();
      }
     
    });

    this.route.queryParams.subscribe((queryParams:Params) =>{

    })
  }

  ngDoCheck() {
  //  this.commonService.logInfo("outputCapture log",this.itemObject);
  
  }

}
