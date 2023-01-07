import { TestBed } from '@angular/core/testing';

import { LotsdataService } from './lotsdata.service';

describe('LotsdataService', () => {
  let service: LotsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
