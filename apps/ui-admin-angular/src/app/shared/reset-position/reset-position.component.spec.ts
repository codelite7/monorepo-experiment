import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResetPositionComponent } from './reset-position.component';

describe('ResetPositionComponent', () => {
  let component: ResetPositionComponent;
  let fixture: ComponentFixture<ResetPositionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPositionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
