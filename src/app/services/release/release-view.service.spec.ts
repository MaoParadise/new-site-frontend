import { TestBed } from '@angular/core/testing';

import { ReleaseViewService } from './release-view.service';

describe('ReleaseViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReleaseViewService = TestBed.get(ReleaseViewService);
    expect(service).toBeTruthy();
  });
});
