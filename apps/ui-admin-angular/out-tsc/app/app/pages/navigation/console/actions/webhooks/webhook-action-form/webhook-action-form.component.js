import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { WebhookActionSuccessCodes } from '../webhook';
import { FormBuilder, Validators } from '@angular/forms';
import { indexOf } from 'lodash';
import { Location } from '@angular/common';
import { NotificationService } from '@main/notification/notification.service';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
let WebhookActionFormComponent = class WebhookActionFormComponent {
    constructor(fb, location, webhooksService, notificationService) {
        this.fb = fb;
        this.location = location;
        this.webhooksService = webhooksService;
        this.notificationService = notificationService;
        this.successCodeOptions = WebhookActionSuccessCodes;
    }
    get name() {
        return this.webhookForm.get('name');
    }
    get url() {
        return this.webhookForm.get('url');
    }
    get headers() {
        return this.webhookForm.get('headers');
    }
    get successCodes() {
        return this.webhookForm.get('successCodes');
    }
    get maxConcurrentRequests() {
        return this.webhookForm.get('maxConcurrentRequests');
    }
    get retryIntervalSeconds() {
        return this.webhookForm.get('retryIntervalSeconds');
    }
    get maxRetries() {
        return this.webhookForm.get('maxRetries');
    }
    ngOnInit() {
        this.webhookForm = this.fb.group({
            id: [this.webhookAction.id],
            name: [this.webhookAction.name, Validators.required],
            method: [this.webhookAction.method, Validators.required],
            url: [this.webhookAction.url, [Validators.required, Validators.pattern(/^(http:\/\/|https:\/\/).+\..+/)]],
            verifyTlsCertificate: [this.webhookAction.verifyTlsCertificate, Validators.required],
            headers: this.fb.array(this.initHeaders()),
            successCodes: [this.webhookAction.successCodes, Validators.required],
            maxConcurrentRequests: [this.webhookAction.maxConcurrentRequests, [Validators.required, Validators.min(-1)]],
            retryIntervalSeconds: [this.webhookAction.retryIntervalSeconds, [Validators.required, Validators.min(0)]],
            maxRetries: [this.webhookAction.maxRetries, [Validators.required, Validators.min(-1)]],
        });
    }
    initHeaders() {
        const headersArray = [];
        for (const header of this.webhookAction.headers) {
            const headerGroup = this.initHeader();
            headerGroup.get('name').setValue(header.name);
            headerGroup.get('value').setValue(header.value);
            headersArray.push(headerGroup);
        }
        return headersArray;
    }
    initHeader() {
        return this.fb.group({
            name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_-]+$/)]],
            value: ['', Validators.required],
        });
    }
    addHeader() {
        const control = this.webhookForm.get('headers');
        control.push(this.initHeader());
    }
    removeHeader(i) {
        const control = this.webhookForm.controls.headers;
        control.removeAt(i);
    }
    toggleSuccessCode(successCode) {
        const index = indexOf(this.successCodes.value, successCode);
        const newCodes = this.successCodes.value;
        if (index === -1) {
            newCodes.push(successCode);
        }
        else {
            newCodes.splice(index, 1);
        }
        this.successCodes.setValue(newCodes);
        // dirty only gets set by angular if the user interacts with an input.
        // since the ui here is little buttons, we have to do it manually
        this.successCodes.markAsDirty();
        this.successCodes.markAsTouched();
    }
    getSuccessCodeColor(successCode) {
        const index = indexOf(this.webhookForm.get('successCodes').value, successCode);
        return index === -1 ? 'gray' : 'success';
    }
    submit() {
        if (!this.edit) {
            this.create();
        }
        else {
            this.update();
        }
    }
    create() {
        this.webhooksService.createWebhookAction(this.webhookForm.value).subscribe(() => this.location.back(), (error) => this.notificationService.error('Please try again', 'Error creating webhook action'));
    }
    update() {
        this.webhooksService.updateWebhookAction(this.webhookForm.value).subscribe(() => this.location.back(), (error) => this.notificationService.error('Please try again', 'Error updating webhook action'));
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], WebhookActionFormComponent.prototype, "edit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], WebhookActionFormComponent.prototype, "webhookAction", void 0);
WebhookActionFormComponent = __decorate([
    Component({
        selector: 'app-webhook-action-form',
        templateUrl: './webhook-action-form.component.html',
        styleUrls: ['./webhook-action-form.component.scss'],
    }),
    __metadata("design:paramtypes", [FormBuilder,
        Location,
        WebhooksService,
        NotificationService])
], WebhookActionFormComponent);
export { WebhookActionFormComponent };
//# sourceMappingURL=webhook-action-form.component.js.map