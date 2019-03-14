import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StockCounterComponent),
    multi: true
  }]
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

  @Input() step: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 100;

  @Output() changed = new EventEmitter<number>();

  value: number = 0;
  focus: boolean;

  constructor() {
  }

  increment() {
    if (this.value < this.max) {
      this.value += this.step;
      this.changed.emit(this.value);
    }
  }
  
  decrement() {
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
