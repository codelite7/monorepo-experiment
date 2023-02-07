import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainNavSubitemComponent } from './main-nav-subitem.component';

describe('MainNavSubitemComponent', () => {
  let component: MainNavSubitemComponent;
  let fixture: ComponentFixture<MainNavSubitemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavSubitemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
