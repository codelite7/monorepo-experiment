import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainService } from '@main/main.service';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { TasksService } from '../tasks/tasks.service';
import { FloatingCardService } from '@main/floating-card/floating-card.service';
import { Title } from '@angular/platform-browser';
import { Pipeline, WebhookAction } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
import { NotificationService } from '@main/notification/notification.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConsoleComponent implements OnInit {
  pipelines: Pipeline[] | undefined;
  webhookActions: WebhookAction[] | undefined;

  constructor(
    public mainService: MainService,
    public mainNavService: MainNavService,
    public tasksService: TasksService,
    public floatingCardService: FloatingCardService,
    private pipelineService: PipelineServiceService,
    private webhooksService: WebhooksService,
    private notificationService: NotificationService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('dashboard');
    this.titleService.setTitle('Dashboard - Swarm IO');
    this.refreshPipelines();
    this.webhooksService.getWebhookActions('0', 100, '').subscribe(
      (webhooks) => (this.webhookActions = webhooks),
      (error) => this.notificationService.error('Refresh the page to try again', 'Error loading webhook actions')
    );
  }

  refreshPipelines(): void {
    this.pipelineService.getPipelines('0', 100, '').subscribe(
      (pipelines) => (this.pipelines = pipelines),
      (error) => this.notificationService.error('Refresh the page to try again', 'Error loading api tokens')
    );
  }
}
