import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconColorCircleComponent } from './icon-color-circle.component';

describe('IconColorCircleComponent', () => {
  let component: IconColorCircleComponent;
  let fixture: ComponentFixture<IconColorCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IconColorCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconColorCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
