import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor][myForOf]'
})
export class MyForDirective {

  @Input()
  set myForOf(collection) {
    collection.forEach((item, index: number) => {
      this.view.createEmbeddedView(this.template);
    });
  }

  constructor(private view: ViewContainerRef,
              private template: TemplateRef<any>) {
    
  }

}
