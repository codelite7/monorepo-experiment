import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { MainService } from '@main/main.service';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
import { NotificationService } from '@main/notification/notification.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { first } from 'rxjs/operators';
import { get } from 'lodash';
import { DependencyErrorModalComponent } from '@shared/dependency-error-modal/dependency-error-modal.component';
import { ResetPositionComponent } from '@shared/reset-position/reset-position.component';
let WebhooksComponent = class WebhooksComponent {
    constructor(mainService, mainNavService, titleService, webhooksService, notificationService, loadingService) {
        this.mainService = mainService;
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.webhooksService = webhooksService;
        this.notificationService = notificationService;
        this.loadingService = loadingService;
    }
    ngOnInit() {
        this.mainNavService.selectedItem('webhooks');
        this.titleService.setTitle('Webhook Actions - Swarm IO');
        this.webhooksService.getWebhookActions().subscribe((webhooks) => (this.webhookActions = webhooks), (error) => this.notificationService.error('Refresh the page to try again', 'Error loading webhook actions'));
    }
    deleteWebhookAction() {
        this.loadingService.setOptions({}).show();
        this.webhooksService
            .deleteWebhookAction(this.webhookAction.id)
            .pipe(first())
            .subscribe(() => {
            this.notificationService.success('Webhook action deleted', 'Success!');
            this.webhooksService
                .getWebhookActions()
                .pipe(first())
                .subscribe((webhooks) => (this.webhookActions = webhooks), (error) => this.notificationService.error('Refresh the page to try again', 'Error loading webhook actions'), () => this.loadingService.hide());
        }, (error) => {
            if (get(error, 'error.dependencies')) {
                // set dependencies, which will show the dependencies error modal
                this.dependencies = error.error.dependencies;
                this.dependencyModal.show();
            }
            else {
                this.notificationService.error('Please try again', 'Failed to delete webhook action');
            }
            this.loadingService.hide();
        });
    }
};
__decorate([
    ViewChild('dependencyModal'),
    __metadata("design:type", DependencyErrorModalComponent)
], WebhooksComponent.prototype, "dependencyModal", void 0);
__decorate([
    ViewChild('resetPositionModal'),
    __metadata("design:type", ResetPositionComponent)
], WebhooksComponent.prototype, "resetPositionModal", void 0);
WebhooksComponent = __decorate([
    Component({
        selector: 'app-webhooks',
        templateUrl: './webhooks.component.html',
        styleUrls: ['./webhooks.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService,
        MainNavService,
        Title,
        WebhooksService,
        NotificationService,
        LoadingGeneralService])
], WebhooksComponent);
export { WebhooksComponent };
//# sourceMappingURL=webhooks.component.js.map