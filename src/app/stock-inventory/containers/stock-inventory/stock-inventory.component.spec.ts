import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInventoryComponent } from './stock-inventory.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StockBranchComponent } from '../../components/stock-branch/stock-branch.component';
import { StockProductsComponent } from '../../components/stock-products/stock-products.component';
import { StockSelectorComponent } from '../../components/stock-selector/stock-selector.component';
import { StockCounterComponent } from '../../components/stock-counter/stock-counter.component';
import { HttpClientModule } from '@angular/common/http';

describe('StockInventoryComponent', () => {
  let component: StockInventoryComponent;
  let fixture: ComponentFixture<StockInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockInventoryComponent,
        StockCounterComponent,
        StockBranchComponent,
        StockProductsComponent,
        StockSelectorComponent
      ],
      providers: [
      ],
      imports: [
        HttpClientModule,
        ReactiveFormsModule, 
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
