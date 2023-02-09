import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadingCircle2Component } from './loading-circle2.component';

describe('LoadingCircle2Component', () => {
  let component: LoadingCircle2Component;
  let fixture: ComponentFixture<LoadingCircle2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingCircle2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingCircle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
