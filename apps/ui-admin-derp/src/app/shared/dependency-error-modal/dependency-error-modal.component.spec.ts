import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DependencyErrorModalComponent } from './dependency-error-modal.component';

describe('DependencyErrorModalComponent', () => {
  let component: DependencyErrorModalComponent;
  let fixture: ComponentFixture<DependencyErrorModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DependencyErrorModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
