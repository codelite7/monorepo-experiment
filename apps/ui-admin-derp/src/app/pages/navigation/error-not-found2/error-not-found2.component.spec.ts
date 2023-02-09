import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorNotFound2Component } from './error-not-found2.component';

describe('ErrorNotFound2Component', () => {
  let component: ErrorNotFound2Component;
  let fixture: ComponentFixture<ErrorNotFound2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorNotFound2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotFound2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
