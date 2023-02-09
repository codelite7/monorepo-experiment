import { TestBed } from '@angular/core/testing';

import { ColorConfigService } from './color-config.service';

describe('ColorConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorConfigService = TestBed.get(ColorConfigService);
    expect(service).toBeTruthy();
  });
});
