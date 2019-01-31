import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.sass']
})
export class StockProductsComponent {

  @Input() parent: FormGroup;
  @Output() deletedStock: EventEmitter<any> = new EventEmitter<any>();
  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  constructor() {
  }

  removeStock(i: number) {
    this.deletedStock.emit(i);
  }

}
