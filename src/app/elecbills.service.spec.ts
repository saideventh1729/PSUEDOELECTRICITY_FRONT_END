import { TestBed } from '@angular/core/testing';

import { ElecbillsService } from './elecbills.service';

describe('ElecbillsService', () => {
  let service: ElecbillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElecbillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
