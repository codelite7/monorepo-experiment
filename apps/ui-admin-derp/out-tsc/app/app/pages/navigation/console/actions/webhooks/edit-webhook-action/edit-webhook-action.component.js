import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
let EditWebhookActionComponent = class EditWebhookActionComponent {
    constructor(activatedRoute, webhooksService, mainNavService, titleService) {
        this.activatedRoute = activatedRoute;
        this.webhooksService = webhooksService;
        this.mainNavService = mainNavService;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.mainNavService.selectedItem('webhooks');
        this.titleService.setTitle('Edit Webhook Action - Swarm IO');
        this.activatedRoute.params.subscribe((params) => {
            this.id = params.id;
            this.webhooksService.getWebhookAction(this.id).subscribe((webhookAction) => (this.webhookAction = webhookAction), (error) => (this.error = true));
        }, (error) => (this.error = true));
    }
};
EditWebhookActionComponent = __decorate([
    Component({
        selector: 'app-edit-webhook-action',
        templateUrl: './edit-webhook-action.component.html',
        styleUrls: ['./edit-webhook-action.component.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        WebhooksService,
        MainNavService,
        Title])
], EditWebhookActionComponent);
export { EditWebhookActionComponent };
//# sourceMappingURL=edit-webhook-action.component.js.map