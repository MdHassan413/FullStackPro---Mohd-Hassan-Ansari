import { TestBed } from '@angular/core/testing';

import { GettingApisService } from './getting-apis.service';

describe('GettingApisService', () => {
  let service: GettingApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettingApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
