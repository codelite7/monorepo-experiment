import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
let OutputsService = class OutputsService {
    constructor(webhooksService, pipelinesService) {
        this.webhooksService = webhooksService;
        this.pipelinesService = pipelinesService;
    }
    getOutputs(excludeid) {
        const outputs = [];
        return forkJoin({
            webhookActions: this.webhooksService.getWebhookActions(),
            pipelines: this.pipelinesService.getPipelines(),
        }).pipe(first(), map((result) => {
            for (const webhookAction of result.webhookActions) {
                if (webhookAction.id !== excludeid) {
                    outputs.push({
                        id: webhookAction.id,
                        name: `Webhook Action - ${webhookAction.name}`,
                        type: 'webhookAction',
                    });
                }
            }
            for (const pipeline of result.pipelines) {
                if (pipeline.id !== excludeid) {
                    outputs.push({
                        id: pipeline.id,
                        name: `Pipeline - ${pipeline.name}`,
                        type: 'pipeline',
                    });
                }
            }
            return outputs;
        }));
    }
};
OutputsService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [WebhooksService, PipelineServiceService])
], OutputsService);
export { OutputsService };
//# sourceMappingURL=outputs.service.js.map