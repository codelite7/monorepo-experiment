import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FloatingNotificationsComponent } from './floating-notifications.component';

describe('FloatingNotificationsComponent', () => {
  let component: FloatingNotificationsComponent;
  let fixture: ComponentFixture<FloatingNotificationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingNotificationsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
