import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditWebhookActionComponent } from './edit-webhook-action.component';

describe('EditWebhookActionComponent', () => {
  let component: EditWebhookActionComponent;
  let fixture: ComponentFixture<EditWebhookActionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditWebhookActionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWebhookActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
