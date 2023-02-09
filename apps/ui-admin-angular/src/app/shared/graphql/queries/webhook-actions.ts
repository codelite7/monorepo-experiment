import { gql } from 'apollo-angular';
import { WebhookActionsListResponse } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

export const listWebhookActionsQuery = gql`
  query ListWebhookActions($in: WebhookActionsListRequestInput) {
    webhookActions(in: $in) {
      webhookActions {
        id
        updated_at
        created_at
        name
        url
        method
        headers {
          name
          value
        }
        max_concurrent_requests
        verify_tls_certificate
        success_codes
        retry_interval
        max_retries
      }
    }
  }
`;

export const getWebhookActionQuery = gql`
  query WebhookAction($in: WebhookActionsGetRequestInput) {
    webhookAction(in: $in) {
      webhookAction {
        id
        updated_at
        created_at
        name
        url
        method
        headers {
          name
          value
        }
        max_concurrent_requests
        verify_tls_certificate
        success_codes
        retry_interval
        max_retries
      }
    }
  }
`;

export const createWebhookActionQuery = gql`
  mutation CreateWebhookAction($in: WebhookActionsCreateRequestInput) {
    createWebhookAction(in: $in) {
      webhookAction {
        id
        updated_at
        created_at
        name
        url
        method
        headers {
          name
          value
        }
        max_concurrent_requests
        verify_tls_certificate
        success_codes
        retry_interval
        max_retries
      }
    }
  }
`;

export const updateWebhookActionQuery = gql`
  mutation UpdateWebhookAction($in: WebhookActionsUpdateRequestInput) {
    updateWebhookAction(in: $in) {
      webhookAction {
        id
        updated_at
        created_at
        name
        url
        method
        headers {
          name
          value
        }
        max_concurrent_requests
        verify_tls_certificate
        success_codes
        retry_interval
        max_retries
      }
    }
  }
`;

export const deleteWebhookActionQuery = gql`
  mutation DeleteWebhookAction($in: WebhookActionsDeleteRequestInput) {
    deleteWebhookAction(in: $in) {
      success
    }
  }
`;

export const setWebhookActionPositionQuery = gql`
  mutation SetWebhookActionPosition($in: SetWebhookActionPositionRequestInput) {
    setWebhookActionPosition(in: $in) {
      success
    }
  }
`;
