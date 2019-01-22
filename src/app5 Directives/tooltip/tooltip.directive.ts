import { Directive, Input, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective {
  tooltipElement = document.createElement('div');
  visible = false;

  @Input()
  set tooltip(value) {
    this.tooltipElement.textContent = value;
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip-active');
  }

  show() {
    this.tooltipElement.classList.add('tooltip-active');
  }

  constructor(private element: ElementRef) {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }

}
