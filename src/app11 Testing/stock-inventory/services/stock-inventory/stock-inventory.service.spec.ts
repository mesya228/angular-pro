import { TestBed } from '@angular/core/testing';

import { StockInventoryService } from './stock-inventory.service';
import { HttpClientModule } from '@angular/common/http';

describe('StockInventoryService', () => {

  let service: StockInventoryService;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        StockInventoryService
      ]
    });
    service = bed.get(StockInventoryService);
  });

  it('should be created', () => {
    service.resolve();
    expect(service).toBeTruthy();
  });
});
