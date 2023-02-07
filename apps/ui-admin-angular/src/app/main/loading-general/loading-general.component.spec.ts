import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadingGeneralComponent } from './loading-general.component';

describe('LoadingGeneralComponent', () => {
  let component: LoadingGeneralComponent;
  let fixture: ComponentFixture<LoadingGeneralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingGeneralComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
