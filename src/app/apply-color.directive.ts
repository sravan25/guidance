import { Directive,ElementRef,HostBinding,HostListener,Input,OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplyColor]'
})
export class ApplyColorDirective implements OnInit{
  @Input('defaultColor') defaultColor:string;
  @HostBinding('style.backgroundColor') backgroundColor:string;
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit() {
   // this.elementRef.nativeElement.style.backgroundColor = "red";
   // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','orange')
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData:Event) {
   // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue')
    this.backgroundColor = "red"
  }

  @HostListener('mouseleave') mouseleave(event:Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','green')
    this.backgroundColor = this.defaultColor
  }
}