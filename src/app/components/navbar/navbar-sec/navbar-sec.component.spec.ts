import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSecComponent } from './navbar-sec.component';

describe('NavbarSecComponent', () => {
  let component: NavbarSecComponent;
  let fixture: ComponentFixture<NavbarSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
