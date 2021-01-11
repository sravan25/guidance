import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { FormListComponent } from '../form-list/form-list.component';
import { OutputCaptureComponent } from '../output-capture/output-capture.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,AfterViewInit  {

  todayDate:Date = new Date();
  timer:Object = null;
  disable:boolean = false;
  inputContent:any = "";
  time:any = "";
  lunch:string="";
  dinner:string="";
  snacks:string="";
  dtime:string="";
  ltime:string="";
  btime:string="";
  breakfast:string="";
  stime:string="";
  errBgColor:string=""
  error:Object = {};
  items:Object;
  dataFromChild:Object;

  @ViewChild(OutputCaptureComponent, {static: true}) outputCapture:OutputCaptureComponent;

  
  constructor() { 

   
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("primaryColorSample:", this.outputCapture.getCapture());
  }  


  updateDiet(event:Event) {
    let inputElement = (<HTMLInputElement>event.target)
    
    let value = inputElement.value;
    let name = inputElement.name;

    this.items[name] = value;

    if(value==="") {
      this.disable = true;
    } else {
      this.disable = false;
    }
    console.log(this.items);
  }
  
  getItem(event:Event) {
    this.dataFromChild = event;
  //  this.dataFromChild = {...event}
  
  }
 

  onSubmit(inputRef:any) {

    console.log("breakfast = ",inputRef);
   
    if(this.breakfast === "" || this.btime === "" || this.lunch === "" || this.ltime === "" || this.dinner === "" || this.dtime === "") {
      this.errBgColor = "red"
     
    } else {
      
      this.items = {
        "breakfast":{
          values:this.breakfast,
          time:this.btime
        },
        "lunch":{
          values:this.lunch,
          time:this.ltime
        },
        "dinner":{
          values:this.dinner,
          time:this.dtime
        },
        "snacks":{
          values:this.snacks,
          time:this.stime
        }
      }
    }
  }

lang = 'it-IT'
voiceIndex = 1


  ngOnInit(): void {
    this.timer = setInterval(()=>{
      this.todayDate = new Date();
    },1000)
  }

  /*
speak = async text => {
  if (!speechSynthesis) {
    return
  }
  
  const message = new SpeechSynthesisUtterance(text)
  message.voice = await this.chooseVoice()
 window.speechSynthesis.speak(message)
}

getVoices = () => {
  return new Promise(resolve => {
    let voices = speechSynthesis.getVoices()
    if (voices.length) {
      resolve(voices)
      return
    }
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices()
      resolve(voices)
    }
  })
}

chooseVoice = async () => {
  const voices = (await this.getVoices()).filter(voice => voice.lang == lang)

  return new Promise(resolve => {
    resolve(voices[voiceIndex])
  })
}
*/


}
