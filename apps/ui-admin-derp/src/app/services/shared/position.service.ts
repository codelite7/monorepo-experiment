import { Injectable } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import moment from 'moment';
import { PipelineServiceService } from '@services/pipelines/pipeline-service.service';
import { WebhooksService } from '@services/actions/webhooks/webhooks.service';
export const WebhookActionType = 'WEBHOOK_ACTION';
export const PipelineType = 'PIPELINE';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  constructor(private pipelineService: PipelineServiceService, private webhooksService: WebhooksService) {}

  resetPosition(id: string, timestamp: number, type: string): Observable<boolean> {
    if (type === WebhookActionType) {
      return this.webhooksService.setWebhookActionPosition(id, timestamp);
    } else if (type === PipelineType) {
      return this.pipelineService.setPipelinePosition(id, timestamp);
    } else {
      throw new Error(`error resetting position: unknown type: ${type}`);
    }
  }

  parseTimestamp(timestamp: string): string | null {
    let parsedValue: string;

    // try string first
    parsedValue = moment(timestamp).toISOString();

    // if null try unix format
    if (parsedValue === null) {
      parsedValue = moment.unix(Number(timestamp)).toISOString();
    }

    return parsedValue;
  }
}
