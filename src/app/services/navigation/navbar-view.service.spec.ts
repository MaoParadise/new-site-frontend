import { TestBed } from '@angular/core/testing';

import { NavbarViewService } from './navbar-view.service';

describe('NavbarViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarViewService = TestBed.get(NavbarViewService);
    expect(service).toBeTruthy();
  });
});
