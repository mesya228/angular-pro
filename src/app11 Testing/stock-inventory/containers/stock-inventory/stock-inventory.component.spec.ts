import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StockInventoryComponent } from './stock-inventory.component';
import { StockBranchComponent } from '../../components/stock-branch/stock-branch.component';
import { StockProductsComponent } from '../../components/stock-products/stock-products.component';
import { StockSelectorComponent } from '../../components/stock-selector/stock-selector.component';
import { StockCounterComponent } from '../../components/stock-counter/stock-counter.component';

import { StockInventoryService } from '../../services/stock-inventory/stock-inventory.service';

describe('StockInventoryComponent', () => {
  let component: StockInventoryComponent;
  let fixture: ComponentFixture<StockInventoryComponent>;
  let el: DebugElement;
  let service: StockInventoryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockInventoryComponent,
        StockCounterComponent,
        StockBranchComponent,
        StockProductsComponent,
        StockSelectorComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        StockInventoryService
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
    el = fixture.debugElement;
    service = el.injector.get(StockInventoryService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cart items and products on init', (done) => {
    spyOn(service, 'getProducts').and.callThrough();
    spyOn(service, 'getCarts').and.callThrough();
    service.resolve().subscribe(() => {
      component.ngOnInit();
      expect(service.getProducts).toHaveBeenCalled();
      expect(service.getCarts).toHaveBeenCalled();
      done();
    });
  });

  it('should create a product map from the service response', (done) => {
    service.resolve().subscribe(() => {
      component.ngOnInit();
      expect(component.productsMap).toBeTruthy();
      done();
    });
  });

  it('should store the products response', (done) => {
    service.resolve().subscribe(() => {
      component.ngOnInit();
      expect(component.products).toBeTruthy();
      done();
    });
  });

  it('should create a stock item for each cart item', (done) => {
    spyOn(component, 'addStock').and.callThrough();
    service.resolve().subscribe(() => {
      component.ngOnInit();
      expect(component.addStock).toHaveBeenCalledTimes(component.carts.length);
      done();
    });
  });

});
