import { TestBed } from '@angular/core/testing';

import { LoadingGeneralService } from './loading-general.service';

describe('LoadingGeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingGeneralService = TestBed.get(LoadingGeneralService);
    expect(service).toBeTruthy();
  });
});
