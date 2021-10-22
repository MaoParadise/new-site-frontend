import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPriComponent } from './navbar-pri.component';

describe('NavbarPriComponent', () => {
  let component: NavbarPriComponent;
  let fixture: ComponentFixture<NavbarPriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
