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
  inputContent:any = "";
  dataFromChild:Object;
  items:Object;
  disable:boolean = false;
  @ViewChild(OutputCaptureComponent, {static: true}) outputCapture:OutputCaptureComponent;

  
  constructor() { 
   
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("primaryColorSample:", this.outputCapture.getCapture());
  }  

  getItem(event:Event) {
    this.dataFromChild = event;
  //  this.dataFromChild = {...event}
  
  }
 
  getItemsFromFormComponent(event:Event) {
   
    this.items =event;
    console.log("items in maincomonent === ",this.items);
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
