import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateWebhookActionComponent } from './create-webhook-action.component';

describe('CreateWebhookActionComponent', () => {
  let component: CreateWebhookActionComponent;
  let fixture: ComponentFixture<CreateWebhookActionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWebhookActionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWebhookActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
