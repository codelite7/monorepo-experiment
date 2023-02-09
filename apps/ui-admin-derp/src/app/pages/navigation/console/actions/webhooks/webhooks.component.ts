import { Component, OnInit, ViewChild } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { MainService } from '@main/main.service';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
import { WebhookAction } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';
import { NotificationService } from '@main/notification/notification.service';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { finalize, first } from 'rxjs/operators';
import { Dependency } from '@shared/dependency-error-modal/dependencies';
import { DependencyErrorModalComponent } from '@shared/dependency-error-modal/dependency-error-modal.component';
import { ResetPositionComponent } from '@shared/reset-position/reset-position.component';

@Component({
  selector: 'app-webhooks',
  templateUrl: './webhooks.component.html',
  styleUrls: ['./webhooks.component.scss'],
})
export class WebhooksComponent implements OnInit {
  @ViewChild('dependencyModal') dependencyModal: DependencyErrorModalComponent;
  @ViewChild('resetPositionModal') resetPositionModal: ResetPositionComponent;

  webhookActions: WebhookAction[] | undefined;
  search: string;
  webhookAction: WebhookAction;
  dependencies: Dependency[];

  constructor(
    public mainService: MainService,
    public mainNavService: MainNavService,
    private titleService: Title,
    private webhooksService: WebhooksService,
    private notificationService: NotificationService,
    private loadingService: LoadingGeneralService
  ) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('webhooks');
    this.titleService.setTitle('Webhook Actions - Swarm IO');
    this.webhooksService.refreshWebhookActions().subscribe(
      (webhooks) => (this.webhookActions = webhooks),
      (error) => this.notificationService.error('Refresh the page to try again', 'Error loading webhook actions')
    );
  }

  deleteWebhookAction(): void {
    this.loadingService.setOptions({}).show();
    this.webhooksService
      .deleteWebhookAction(this.webhookAction.id)
      .pipe(
        finalize(() => {
          this.loadingService.hide();
        })
      )
      .subscribe(
        () => {
          this.webhooksService.refreshWebhookActions().subscribe(
            (webhookActions) => {
              this.webhookActions = webhookActions;
              this.notificationService.success('WebhookAction deleted', 'Success!');
            },
            (error) => this.notificationService.error('Refresh the page to try again', 'Error loading webhookActions')
          );
        },
        (error) => {
          this.notificationService.error('Please try again', 'Failed to delete webhookAction');
        }
      );
  }

  getMethodDisplayText(method: string): string {
      return method.replace('WEBHOOK_ACTION_METHOD_', '')
  }
}
