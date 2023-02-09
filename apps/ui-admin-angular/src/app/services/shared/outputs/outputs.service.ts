import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Output } from '@services/shared/outputs/outputs';
import { first, map } from 'rxjs/operators';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';

@Injectable({
  providedIn: 'root',
})
export class OutputsService {
  constructor(private webhooksService: WebhooksService, private pipelinesService: PipelineServiceService) {}

  getOutputs(excludeid: string): Observable<Output[]> {
    const outputs: Output[] = [];
    return forkJoin({
      webhookActions: this.webhooksService.getWebhookActions('0', 100, ''),
      pipelines: this.pipelinesService.getPipelines('0', 100, ''),
    }).pipe(
      first(),
      map((result) => {
        if (result.webhookActions) {
          for (const webhookAction of result.webhookActions) {
            if (webhookAction.id !== excludeid) {
              outputs.push({
                id: webhookAction.id,
                name: `Webhook Action - ${webhookAction.name}`,
                type: 'webhookAction',
              });
            }
          }
        }

        if (result.pipelines) {
          for (const pipeline of result.pipelines) {
            if (pipeline.id !== excludeid) {
              outputs.push({
                id: pipeline.id,
                name: `Pipeline - ${pipeline.name}`,
                type: 'pipeline',
              });
            }
          }
        }

        return outputs;
      })
    );
  }
}
