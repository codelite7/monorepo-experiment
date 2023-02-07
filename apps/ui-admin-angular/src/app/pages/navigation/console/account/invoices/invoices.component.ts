import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { BillingService } from '@services/account/billing.service';
import currency from 'currency.js';
import { MainService } from '@main/main.service';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Invoice, LineItem } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[];
  upcomingInvoice: Invoice;
  upcomingTierItem: LineItem;
  upcomingEgressItem: LineItem;
  upcomingRetentionItem: LineItem;
  claims: any;

  constructor(
    public mainService: MainService,
    public mainNavService: MainNavService,
    private titleService: Title,
    private notificationService: NotificationService,
    private billingService: BillingService,
    private auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('nav-invoices');
    this.titleService.setTitle('Invoices - Swarm IO');
    this.setClaims();
    this.billingService.listInvoices('', '', '', '').subscribe(
      (invoices) => {
        this.invoices = invoices;
      },
      (error) =>
        this.notificationService.error('Failed to load invoices, please refresh the page to try again.', 'Error')
    );
    this.billingService.getUpcomingInvoice().subscribe(
      (upcomingInvoice) => {
        this.upcomingInvoice = upcomingInvoice;
        if (upcomingInvoice) {
          upcomingInvoice.line_items.forEach((lineItem) => {
            if (lineItem.description.includes('Tier')) {
              this.upcomingTierItem = lineItem;
            } else if (lineItem.description.includes('Egress')) {
              this.upcomingEgressItem = lineItem;
            } else if (lineItem.description.includes('Retention')) {
              this.upcomingRetentionItem = lineItem;
            }
          });
        }
      },
      (error) =>
        this.notificationService.error('Failed to load invoices, please refresh the page to try again.', 'Error')
    );
  }

  formatTotal(total: number): string {
    return currency(total, { fromCents: true }).format();
  }

  getDate(epoch: number): Date {
    const date = new Date(0);
    date.setUTCSeconds(epoch);
    return date;
  }

  setClaims(): void {
    this.auth.idTokenResult.pipe(first()).subscribe((token) => {
      this.claims = token?.claims;
    });
  }
}
