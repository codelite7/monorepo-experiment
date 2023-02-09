import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MessagesAlertComponent } from './messages-alert.component';

describe('MessagesAlertComponent', () => {
  let component: MessagesAlertComponent;
  let fixture: ComponentFixture<MessagesAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesAlertComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
