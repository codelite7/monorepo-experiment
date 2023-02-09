import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorServer2Component } from './error-server2.component';

describe('ErrorServer2Component', () => {
  let component: ErrorServer2Component;
  let fixture: ComponentFixture<ErrorServer2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorServer2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorServer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
