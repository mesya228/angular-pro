import { TestBed } from '@angular/core/testing';

import { StockInventoryService } from './stock-inventory.service';

describe('StockInventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockInventoryService = TestBed.get(StockInventoryService);
    expect(service).toBeTruthy();
  });
});
