import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  todayDate:Date = new Date();
  timer:Object = null;
  disable:boolean = true;
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
  constructor() { 

    setTimeout(() => {
      this.disable = false;
    },2000)
  }


  onUpdateDiet(event:Event) {
    this.inputContent = (<HTMLInputElement>event.target).value;
    console.log(this.inputContent);
  }

  onSubmit(event:Event) {
    console.log("breakfast = ",this.breakfast);
    if(this.breakfast === "") {
      this.errBgColor = "red"
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
