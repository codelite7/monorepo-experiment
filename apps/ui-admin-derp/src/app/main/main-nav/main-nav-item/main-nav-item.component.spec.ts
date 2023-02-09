import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainNavItemComponent } from './main-nav-item.component';

describe('MainNavItemComponent', () => {
  let component: MainNavItemComponent;
  let fixture: ComponentFixture<MainNavItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
