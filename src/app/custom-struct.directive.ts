import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStruct]'
})
export class CustomStructDirective {
  @Input() set appCustomStruct(condition:boolean) {
    if(!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else {
      this.viewContainerRef.clear();
    }

  }

  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { }

}
