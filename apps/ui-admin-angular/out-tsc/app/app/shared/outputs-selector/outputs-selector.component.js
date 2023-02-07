import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
import { forkJoin } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
let OutputsSelectorComponent = class OutputsSelectorComponent {
    constructor(webhooksService, pipelinesService) {
        this.webhooksService = webhooksService;
        this.pipelinesService = pipelinesService;
        // init empty outputs
        this.outputs = [];
        this.showLabel = true;
    }
    ngOnInit() {
        forkJoin({
            webhookActions: this.webhooksService.getWebhookActions(),
            pipelines: this.pipelinesService.getPipelines(),
        })
            .pipe(first(), map((result) => {
            for (const webhookAction of result.webhookActions) {
                if (webhookAction.id !== this.selfid) {
                    this.outputs.push({
                        id: webhookAction.id,
                        name: webhookAction.name,
                        type: 'webhookAction',
                    });
                }
            }
            for (const pipeline of result.pipelines) {
                if (pipeline.id !== this.selfid) {
                    this.outputs.push({
                        id: pipeline.id,
                        name: pipeline.name,
                        type: 'pipeline',
                    });
                }
            }
        }))
            .subscribe(() => { }, (error) => { });
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], OutputsSelectorComponent.prototype, "selfid", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], OutputsSelectorComponent.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], OutputsSelectorComponent.prototype, "showLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], OutputsSelectorComponent.prototype, "parentForm", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], OutputsSelectorComponent.prototype, "formGroupName", void 0);
OutputsSelectorComponent = __decorate([
    Component({
        selector: 'app-outputs-selector',
        templateUrl: './outputs-selector.component.html',
        styleUrls: ['./outputs-selector.component.scss'],
    }),
    __metadata("design:paramtypes", [WebhooksService, PipelineServiceService])
], OutputsSelectorComponent);
export { OutputsSelectorComponent };
//# sourceMappingURL=outputs-selector.component.js.map