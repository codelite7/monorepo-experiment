import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { WebhookAction } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

@Component({
  selector: 'app-edit-webhook-action',
  templateUrl: './edit-webhook-action.component.html',
  styleUrls: ['./edit-webhook-action.component.scss'],
})
export class EditWebhookActionComponent implements OnInit {
  id: string;
  webhookAction: WebhookAction | undefined;
  error: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private webhooksService: WebhooksService,
    public mainNavService: MainNavService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('webhooks');
    this.titleService.setTitle('Edit Webhook Action - Swarm IO');
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = params.id;
        this.webhooksService.getWebhookAction(this.id).subscribe(
          (webhookAction) => (this.webhookAction = webhookAction),
          (error) => (this.error = true)
        );
      },
      (error) => (this.error = true)
    );
  }
}
