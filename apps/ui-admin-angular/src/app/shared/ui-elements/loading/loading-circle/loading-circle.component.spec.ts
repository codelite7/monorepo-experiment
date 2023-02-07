import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadingCircleComponent } from './loading-circle.component';

describe('LoadingCircleComponent', () => {
  let component: LoadingCircleComponent;
  let fixture: ComponentFixture<LoadingCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
