import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
let CreateWebhookActionComponent = class CreateWebhookActionComponent {
    constructor(mainNavService, titleService) {
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.webhookAction = {
            id: '',
            name: '',
            method: 'POST',
            url: '',
            verifyTlsCertificate: true,
            maxConcurrentRequests: 10,
            headers: [],
            successCodes: [200],
            retryIntervalSeconds: 60,
            maxRetries: -1,
        };
    }
    ngOnInit() {
        this.mainNavService.selectedItem('webhooks');
        this.titleService.setTitle('Create Webhook Action - Swarm IO');
    }
};
CreateWebhookActionComponent = __decorate([
    Component({
        selector: 'app-create-webhook-action',
        templateUrl: './create-webhook-action.component.html',
        styleUrls: ['./create-webhook-action.component.scss'],
    }),
    __metadata("design:paramtypes", [MainNavService, Title])
], CreateWebhookActionComponent);
export { CreateWebhookActionComponent };
//# sourceMappingURL=create-webhook-action.component.js.map