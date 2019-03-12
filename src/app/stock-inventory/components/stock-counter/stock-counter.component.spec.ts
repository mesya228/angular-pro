import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCounterComponent } from './stock-counter.component';
import { By } from '@angular/platform-browser';

describe('StockCounterComponent', () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;
  let debugElement: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should decrement correctly', () => {
    component.value = component.max;
    component.decrement();
    expect(component.value).toBe(component.max-1);
  });

  it('should not decrement less than min', () => {
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not increment more than max', () => {
    component.value = component.max;
    component.increment();
    expect(component.value).toBe(component.max);
  });

  it('should call the output on the value change', () => {
    spyOn(component.changed, 'emit').and.callThrough();
    component.increment();
    expect(component.changed.emit).toHaveBeenCalledWith(1);
  });

  it('should increment when increment button is clicked', () => {
    debugElement.query(By.css('button:first-child')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.value).toBe(1);
    expect(debugElement.query(By.css('p')).nativeElement.textContent).toBe('1');
  });
  
  it('should increment the value when the up buttong is pressed', () => {
    const event = new Event('KeyboardEvent') as any;
    event.code = 'ArrowUp';
    debugElement.query(By.css('.counter')).triggerEventHandler('keydown', event);
    fixture.detectChanges();
    expect(component.value).toBe(1);
  });

});
