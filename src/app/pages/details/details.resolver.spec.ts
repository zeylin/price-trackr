import { TestBed } from '@angular/core/testing';

import { DetailsResolver } from './details.resolver';

describe('DetailsResolver', () => {
  let service: DetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
