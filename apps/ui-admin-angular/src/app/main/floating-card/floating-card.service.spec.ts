import { TestBed } from '@angular/core/testing';

import { FloatingCardService } from './floating-card.service';

describe('FloatingCardService', () => {
  let service: FloatingCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloatingCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
