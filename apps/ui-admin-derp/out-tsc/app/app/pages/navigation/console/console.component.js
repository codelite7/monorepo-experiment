import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { MainService } from '@main/main.service';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { TasksService } from '../tasks/tasks.service';
import { FloatingCardService } from '@main/floating-card/floating-card.service';
import { Title } from '@angular/platform-browser';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
import { NotificationService } from '@main/notification/notification.service';
let ConsoleComponent = class ConsoleComponent {
    constructor(mainService, mainNavService, tasksService, floatingCardService, pipelineService, webhooksService, notificationService, titleService) {
        this.mainService = mainService;
        this.mainNavService = mainNavService;
        this.tasksService = tasksService;
        this.floatingCardService = floatingCardService;
        this.pipelineService = pipelineService;
        this.webhooksService = webhooksService;
        this.notificationService = notificationService;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.mainNavService.selectedItem('dashboard');
        this.titleService.setTitle('Dashboard - Swarm IO');
        this.pipelineService.getPipelines().subscribe((pipelines) => (this.pipelines = pipelines), (error) => this.notificationService.error('Refresh the page to try again', 'Error loading pipelines'));
        this.webhooksService.getWebhookActions().subscribe((webhooks) => (this.webhookActions = webhooks), (error) => this.notificationService.error('Refresh the page to try again', 'Error loading webhook actions'));
    }
};
ConsoleComponent = __decorate([
    Component({
        selector: 'app-console',
        templateUrl: './console.component.html',
        styleUrls: ['./console.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService,
        MainNavService,
        TasksService,
        FloatingCardService,
        PipelineServiceService,
        WebhooksService,
        NotificationService,
        Title])
], ConsoleComponent);
export { ConsoleComponent };
//# sourceMappingURL=console.component.js.map