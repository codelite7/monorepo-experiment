import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadingWaveComponent } from './loading-wave.component';

describe('LoadingWaveComponent', () => {
  let component: LoadingWaveComponent;
  let fixture: ComponentFixture<LoadingWaveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingWaveComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
