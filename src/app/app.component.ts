import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // template:`<div> Some conentent</div>`,
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
  /*styles:[`
    {


    }
  
  
  `]*/
})
export class AppComponent {
  title:string = 'guidance';
  id:any;
 
  constructor() {


  }

  
  onpdateField(){

    
  }
}
