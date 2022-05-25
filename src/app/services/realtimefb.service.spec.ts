import { TestBed } from '@angular/core/testing';

import { RealtimefbService } from './realtimefb.service';

describe('RealtimefbService', () => {
  let service: RealtimefbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtimefbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
