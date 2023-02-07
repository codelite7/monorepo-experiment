import { gql } from 'apollo-angular';
import { PipelinesListResponse } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

export const getAccountQuery = gql`
  query Account($in: GetAccountRequestInput) {
    account(in: $in) {
      account {
        firebase_tenant_id
        firebase_tenant_display_name
        stripe_customer_id
        stripe_subscription_id
        billing_email
        uuid
        subscription_status
        plan
      }
    }
  }
`;

export const createAccountQuery = gql`
  mutation CreateAccount($in: CreateAccountRequestInput) {
    createAccount(in: $in) {
      account {
        firebase_tenant_id
        firebase_tenant_display_name
        stripe_customer_id
        stripe_subscription_id
        billing_email
        uuid
        subscription_status
        plan
      }
    }
  }
`;

export const createSubscriptionQuery = gql`
  mutation CreateSubscription($in: CreateSubscriptionRequestInput) {
    createSubscription(in: $in) {
      success
    }
  }
`;

export const cancelSubscriptionQuery = gql`
  mutation CancelSubscription($in: CancelSubscriptionRequestInput) {
    cancelSubscription(in: $in) {
      success
    }
  }
`;
