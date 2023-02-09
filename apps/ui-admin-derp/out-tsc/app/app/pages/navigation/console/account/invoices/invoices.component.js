import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { BillingService } from '@services/account/billing.service';
import currency from 'currency.js';
import { MainService } from '@main/main.service';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
let InvoicesComponent = class InvoicesComponent {
    constructor(mainService, mainNavService, titleService, notificationService, billingService, auth) {
        this.mainService = mainService;
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.notificationService = notificationService;
        this.billingService = billingService;
        this.auth = auth;
    }
    ngOnInit() {
        this.mainNavService.selectedItem('nav-invoices');
        this.titleService.setTitle('Invoices - Swarm IO');
        this.setClaims();
        this.billingService.listInvoices().subscribe((invoices) => {
            this.invoices = invoices;
        }, (error) => this.notificationService.error('Failed to load invoices, please refresh the page to try again.', 'Error'));
        this.billingService.getUpcomingInvoice().subscribe((upcomingInvoice) => {
            this.upcomingInvoice = upcomingInvoice;
            if (upcomingInvoice) {
                upcomingInvoice.lineItems.forEach((lineItem) => {
                    if (lineItem.description.includes('Tier')) {
                        this.upcomingTierItem = lineItem;
                    }
                    else if (lineItem.description.includes('Egress')) {
                        this.upcomingEgressItem = lineItem;
                    }
                    else if (lineItem.description.includes('Retention')) {
                        this.upcomingRetentionItem = lineItem;
                    }
                });
            }
        }, (error) => this.notificationService.error('Failed to load invoices, please refresh the page to try again.', 'Error'));
    }
    formatTotal(total) {
        return currency(total, { fromCents: true }).format();
    }
    getDate(epoch) {
        const date = new Date(0);
        date.setUTCSeconds(epoch);
        return date;
    }
    setClaims() {
        this.auth.idTokenResult.pipe(first()).subscribe((token) => {
            this.claims = token.claims;
        });
    }
};
InvoicesComponent = __decorate([
    Component({
        selector: 'app-invoices',
        templateUrl: './invoices.component.html',
        styleUrls: ['./invoices.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService,
        MainNavService,
        Title,
        NotificationService,
        BillingService,
        AngularFireAuth])
], InvoicesComponent);
export { InvoicesComponent };
//# sourceMappingURL=invoices.component.js.map