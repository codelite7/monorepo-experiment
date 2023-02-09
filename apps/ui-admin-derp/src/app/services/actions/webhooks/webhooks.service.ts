import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { WebhookAction } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';
import {
  createWebhookActionQuery,
  deleteWebhookActionQuery,
  getWebhookActionQuery,
  listWebhookActionsQuery,
  setWebhookActionPositionQuery,
  updateWebhookActionQuery,
} from '@shared/graphql/queries/webhook-actions';
import { setPipelinePositionQuery } from '@shared/graphql/queries/pipelines';

@Injectable({
  providedIn: 'root',
})
export class WebhooksService {
  constructor(private apollo: Apollo) {}

  createWebhookAction(webhookAction: WebhookAction): Observable<WebhookAction | undefined> {
    return this.apollo
      .mutate({
        mutation: createWebhookActionQuery,
        variables: {
          in: {
            webhookAction,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.createWebhookAction?.webhookAction;
        })
      );
  }

  updateWebhookAction(id: string, webhookAction: WebhookAction): Observable<WebhookAction> {
    return this.apollo
      .mutate({
        mutation: updateWebhookActionQuery,
        variables: {
          in: {
            id,
            webhookAction,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.updateWebhookAction?.webhookAction;
        })
      );
  }

  refreshWebhookActions() {
    return this.getWebhookActions('0', 100, '');
  }

  getWebhookActions(skip: string, limit: number, orderBy: string): Observable<WebhookAction[] | undefined> {
    return this.apollo
      .query({
        query: listWebhookActionsQuery,
        variables: {
          in: {
            skip,
            limit,
            order_by: orderBy,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response.data?.webhookActions?.webhookActions;
        })
      );
  }

  getWebhookAction(id: string): Observable<WebhookAction | undefined> {
    return this.apollo
      .query({
        query: getWebhookActionQuery,
        variables: {
          in: {
            id,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.webhookAction?.webhookAction;
        })
      );
  }

  deleteWebhookAction(id: string): Observable<boolean | undefined> {
    return this.apollo
      .mutate({
        mutation: deleteWebhookActionQuery,
        variables: {
          in: {
            id,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.deleteWebhookAction.success;
        })
      );
  }

  setWebhookActionPosition(id: string, timestamp: number): Observable<boolean> {
    return this.apollo
      .mutate({
        mutation: setWebhookActionPositionQuery,
        variables: {
          in: {
            id,
            timestamp,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.setWebhookActionPosition.success;
        })
      );
  }
}
