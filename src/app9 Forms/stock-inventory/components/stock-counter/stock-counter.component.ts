import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StockCounterComponent),
    multi: true
  }],
})
export class StockCounterComponent implements ControlValueAccessor {

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn) {
    this.onTouch = fn;
  }
  registerOnTouched(fn) {
    this.onModelChange = fn;
  }
  writeValue(value) {
    this.value = value || 0;
  }

  @Input() step: number = 10;
  @Input() min: number = 10;
  @Input() max: number = 100;

  value: number = 10;
  focus: boolean;

  constructor() { }

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
  
  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }

  onKeyDown(event: KeyboardEvent) {
    console.log(event);
    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    }

    if (handlers[event.code]) {
      handlers[event.code]();
    }
    this.onTouch();
  }
  onBlur(event: FocusEvent) {
    this.focus = false;
    this.onTouch();
  }
  onFocus(event: FocusEvent) {
    this.focus = true;
    this.onTouch();
  }

}
