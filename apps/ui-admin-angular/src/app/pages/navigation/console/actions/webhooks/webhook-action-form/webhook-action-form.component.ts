import { Component, Input, OnInit } from '@angular/core';
import { WebhookActionSuccessCodes } from '../webhook';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { indexOf } from 'lodash';
import { Location } from '@angular/common';
import { NotificationService } from '@main/notification/notification.service';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { finalize } from 'rxjs/operators';
import { WebhookAction } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

@Component({
  selector: 'app-webhook-action-form',
  templateUrl: './webhook-action-form.component.html',
  styleUrls: ['./webhook-action-form.component.scss'],
})
export class WebhookActionFormComponent implements OnInit {
  public webhookForm: FormGroup;
  successCodeOptions = WebhookActionSuccessCodes;

  @Input() edit: boolean;
  @Input() webhookAction: WebhookAction;

  constructor(
    private fb: FormBuilder,
    public location: Location,
    private webhooksService: WebhooksService,
    public notificationService: NotificationService,
    private loadingService: LoadingGeneralService
  ) {}

  get name() {
    return this.webhookForm.get('name');
  }

  get url() {
    return this.webhookForm.get('url');
  }

  get headers() {
    return this.webhookForm.get('headers');
  }

  get success_codes() {
    return this.webhookForm.get('success_codes');
  }

  get max_concurrent_requests() {
    return this.webhookForm.get('max_concurrent_requests');
  }

  get retry_interval() {
    return this.webhookForm.get('retry_interval');
  }

  get max_retries() {
    return this.webhookForm.get('max_retries');
  }

  ngOnInit() {
    this.webhookForm = this.fb.group({
      id: [this.webhookAction.id],
      name: [this.webhookAction.name, Validators.required],
      method: [this.webhookAction.method, Validators.required],
      url: [this.webhookAction.url, [Validators.required, Validators.pattern(/^(http:\/\/|https:\/\/).+\..+/)]],
      verify_tls_certificate: [this.webhookAction.verify_tls_certificate, Validators.required],
      headers: this.fb.array(this.initHeaders()),
      success_codes: [this.webhookAction.success_codes, Validators.required],
      max_concurrent_requests: [this.webhookAction.max_concurrent_requests, [Validators.required, Validators.min(-1)]],
      retry_interval: [this.webhookAction.retry_interval, [Validators.required, Validators.min(0)]],
      max_retries: [this.webhookAction.max_retries, [Validators.required, Validators.min(-1)]],
    });
  }

  initHeaders(): FormGroup[] {
    const headersArray: FormGroup[] = [];
    for (const header of this.webhookAction.headers) {
      const headerGroup = this.initHeader();
      headerGroup.get('name')?.setValue(header.name);
      headerGroup.get('value')?.setValue(header.value);
      headersArray.push(headerGroup);
    }
    return headersArray;
  }

  initHeader(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_-]+$/)]],
      value: ['', Validators.required],
    });
  }

  addHeader() {
    const control = this.webhookForm.get('headers') as FormArray;
    control.push(this.initHeader());
  }

  removeHeader(i: number) {
    const control = this.webhookForm.controls.headers as FormArray;
    control.removeAt(i);
  }

  toggleSuccessCode(successCode: number) {
    const index = indexOf(this.success_codes?.value, successCode);
    const newCodes = this.success_codes?.value;
    if (index === -1) {
      newCodes.push(successCode);
    } else {
      newCodes.splice(index, 1);
    }
    this.success_codes?.setValue(newCodes);
    // dirty only gets set by angular if the user interacts with an input.
    // since the ui here is little buttons, we have to do it manually
    this.success_codes?.markAsDirty();
    this.success_codes?.markAsTouched();
  }

  getSuccessCodeColor(successCode: number) {
    const index = indexOf(this.webhookForm.get('success_codes')?.value, successCode);
    return index === -1 ? 'gray' : 'success';
  }

  submit() {
    const webhookAction = this.webhookForm.value;
    if (!this.edit) {
      this.create(webhookAction);
    } else {
      this.update(webhookAction);
    }
  }

  create(webhookAction: WebhookAction): void {
    this.loadingService.setOptions({}).show();
    this.webhooksService
      .createWebhookAction(webhookAction)
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe(
        () => this.location.back(),
        (error) => {
          if (error.error === 'a webhookAction with this name already exists') {
            this.notificationService.error(
              'A webhookAction with this name already exists, there cannot be two webhookActions with the same name.',
              'Error creating webhookAction'
            );
          } else {
            this.notificationService.error('Please try again', 'Error creating webhookAction');
          }
        }
      );
  }

  update(webhookAction: WebhookAction): void {
    this.loadingService.setOptions({}).show();
    this.webhooksService
      .updateWebhookAction(webhookAction.id, webhookAction)
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe(
        () => this.location.back(),
        (error) => {
          if (error.error === 'a webhookAction with this name already exists') {
            this.notificationService.error(
              'A webhookAction with this name already exists, there cannot be two webhookActions with the same name.',
              'Error updating webhookAction'
            );
          } else {
            this.notificationService.error('Please try again', 'Error updating webhookAction');
          }
        }
      );
  }
}
