import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.sass']
})
export class StockCounterComponent {
  @Input() step: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 100;

  @Output() changed = new EventEmitter<number>();

  value: number = 0;
  focus: boolean;

  constructor() { }

  increment() {
    console.log('increment');
    if (this.value < this.max) {
      this.value += this.step;
      this.changed.emit(this.value);
    }
  }
  
  decrement() {
    console.log('decrement');
    if (this.value > this.min) {
      this.value -= this.step;
      this.changed.emit(this.value);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    }
    if (handlers[event.code]) {
      handlers[event.code]();
    }
  }
  onBlur(event: FocusEvent) {
    this.focus = false;
  }
  onFocus(event: FocusEvent) {
    this.focus = true;
  }

}
