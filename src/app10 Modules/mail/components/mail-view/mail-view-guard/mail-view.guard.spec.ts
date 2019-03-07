import { TestBed, async, inject } from '@angular/core/testing';

import { MailViewGuard } from './mail-view.guard';

describe('MailViewGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailViewGuard]
    });
  });

  it('should ...', inject([MailViewGuard], (guard: MailViewGuard) => {
    expect(guard).toBeTruthy();
  }));
});
