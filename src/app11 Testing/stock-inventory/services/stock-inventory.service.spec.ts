import { TestBed } from '@angular/core/testing';

import { StockInventoryService } from './stock-inventory.service';

import { HttpClientModule } from '@angular/common/http';

// describe('StockInventoryService', () => {

//   let service: StockInventoryService;

//   beforeEach(() => {
//     const bed = TestBed.configureTestingModule({
//       imports: [
//         HttpClientModule
//       ],
//       providers: [
//         StockInventoryService
//       ]
//     });
//     service = bed.get(StockInventoryService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   }); 

//   it('should get cart items', (done: DoneFn) => {
//     service.getCartItems().subscribe(res => {
//       expect(res.length).toBe(3);
//       done();
//     });
//   });

// });
