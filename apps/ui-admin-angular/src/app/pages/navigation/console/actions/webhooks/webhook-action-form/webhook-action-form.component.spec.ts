import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebhookActionFormComponent } from './webhook-action-form.component';

describe('WebhookActionFormComponent', () => {
  let component: WebhookActionFormComponent;
  let fixture: ComponentFixture<WebhookActionFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WebhookActionFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebhookActionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
