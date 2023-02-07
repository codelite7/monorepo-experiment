import { Component, Input, OnInit } from '@angular/core';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
import { forkJoin } from 'rxjs';
import { Output } from '@services/shared/outputs/outputs';
import { first, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-outputs-selector',
  templateUrl: './outputs-selector.component.html',
  styleUrls: ['./outputs-selector.component.scss'],
})
export class OutputsSelectorComponent implements OnInit {
  // init empty outputs
  outputs: Output[] = [];

  @Input() selfid: string;
  @Input() id: string;
  @Input() showLabel = true;
  @Input() parentForm: FormGroup;
  @Input() formGroupName: string | number;

  constructor(private webhooksService: WebhooksService, private pipelinesService: PipelineServiceService) {}

  ngOnInit(): void {
    forkJoin({
      webhookActions: this.webhooksService.getWebhookActions('0', 100, ''),
      pipelines: this.pipelinesService.getPipelines('0', 100, ''),
    })
      .pipe(
        first(),
        map((result) => {
          if (result.webhookActions) {
            for (const webhookAction of result.webhookActions) {
              if (webhookAction.id !== this.selfid) {
                this.outputs.push({
                  id: webhookAction.id,
                  name: webhookAction.name,
                  type: 'webhookAction',
                });
              }
            }
          }

          if (result.pipelines) {
            for (const pipeline of result.pipelines) {
              if (pipeline.id !== this.selfid) {
                this.outputs.push({
                  id: pipeline.id,
                  name: pipeline.name,
                  type: 'pipeline',
                });
              }
            }
          }
        })
      )
      .subscribe(
        () => {},
        (error) => {}
      );
  }
}
