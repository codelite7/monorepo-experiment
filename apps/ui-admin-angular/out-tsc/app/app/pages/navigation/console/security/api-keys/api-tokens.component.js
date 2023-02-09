import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { ApitokensService } from '@services/security/apitokens.service';
import { NotificationService } from '@main/notification/notification.service';
import { remove } from 'lodash';
let ApiTokensComponent = class ApiTokensComponent {
    constructor(mainNavService, titleService, apitokensService, notificationService) {
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.apitokensService = apitokensService;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.mainNavService.selectedItem('webhooks');
        this.titleService.setTitle('API Tokens - Swarm IO');
        this.apitokensService.getApitokens().subscribe((apitokens) => (this.apitokens = apitokens), (error) => this.notificationService.error('Refresh the page to try again', 'Error loading api tokens'));
    }
    createApitoken() {
        this.apitokensService.createApitoken().subscribe((apitoken) => {
            this.apitokens.push(apitoken);
            this.notificationService.success(`API Token created`, 'Success');
        }, (error) => {
            this.notificationService.error('Please try again', 'Error creating api token');
        });
    }
    deleteApitoken() {
        this.apitokensService.deleteApitoken(this.apitokenToDelete).subscribe((result) => {
            remove(this.apitokens, (x) => x === this.apitokenToDelete);
            this.notificationService.success(`API Token deleted`, 'Success');
            this.apitokenToDelete = undefined;
        }, (error) => {
            this.notificationService.error('Please try again', 'Error deleting api token');
            this.apitokenToDelete = undefined;
        });
    }
};
ApiTokensComponent = __decorate([
    Component({
        selector: 'app-api-tokens',
        templateUrl: './api-tokens.component.html',
        styleUrls: ['./api-tokens.component.scss'],
    }),
    __metadata("design:paramtypes", [MainNavService,
        Title,
        ApitokensService,
        NotificationService])
], ApiTokensComponent);
export { ApiTokensComponent };
//# sourceMappingURL=api-tokens.component.js.map