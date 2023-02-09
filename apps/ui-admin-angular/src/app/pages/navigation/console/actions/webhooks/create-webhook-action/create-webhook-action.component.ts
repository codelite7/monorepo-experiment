import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { WebhookAction } from '../webhook';

@Component({
  selector: 'app-create-webhook-action',
  templateUrl: './create-webhook-action.component.html',
  styleUrls: ['./create-webhook-action.component.scss'],
})
export class CreateWebhookActionComponent implements OnInit {
  webhookAction: WebhookAction = {
    id: '',
    name: '',
    method: 'WEBHOOK_ACTION_METHOD_POST',
    url: '',
    verify_tls_certificate: true,
    max_concurrent_requests: 10,
    headers: [],
    success_codes: [200],
    retry_interval: 60,
    max_retries: -1,
  };

  constructor(public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('webhooks');
    this.titleService.setTitle('Create Webhook Action - Swarm IO');
  }
}
