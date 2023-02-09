import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadingCircleDotComponent } from './loading-circle-dot.component';

describe('LoadingCircleDotComponent', () => {
  let component: LoadingCircleDotComponent;
  let fixture: ComponentFixture<LoadingCircleDotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingCircleDotComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingCircleDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
