import { TestBed } from '@angular/core/testing';

import { MailFolderService } from './mail-folder.service';

describe('MailFolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailFolderService = TestBed.get(MailFolderService);
    expect(service).toBeTruthy();
  });
});
