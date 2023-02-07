import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewSubscriptionComponent } from './new-subscription.component';

describe('NewSubscriptionComponent', () => {
  let component: NewSubscriptionComponent;
  let fixture: ComponentFixture<NewSubscriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewSubscriptionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
