import { gql } from 'apollo-angular';
import { PipelinesListResponse } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

export const getPaymentMethodsQuery = gql`
  query Query($in: ListPaymentMethodsRequestInput) {
    paymentMethods(in: $in) {
      payment_methods {
        id
        brand
        last_four
        exp_month
        exp_year
        default
      }
    }
  }
`;

export const listInvoicesQuery = gql`
  query Invoices($in: ListInvoicesRequestInput) {
    invoices(in: $in) {
      invoices {
        id
        total
        period_start
        period_end
        status
        pdf_link
        hosted_invoice_url
        line_items {
          id
          amount
          description
        }
      }
    }
  }
`;

export const getUpcomingInvoiceQuery = gql`
  query UpcomingInvoice {
    upcomingInvoice {
      invoice {
        id
        total
        period_start
        period_end
        status
        pdf_link
        hosted_invoice_url
        line_items {
          id
          amount
          description
        }
      }
    }
  }
`;

export const attachPaymentMethodQuery = gql`
  mutation AttachPaymentMethod($in: AttachPaymentMethodRequestInput) {
    attachPaymentMethod(in: $in) {
      success
    }
  }
`;

export const detachPaymentMethodQuery = gql`
  mutation DetachPaymentMethod($in: DetachPaymentMethodRequestInput) {
    detachPaymentMethod(in: $in) {
      success
    }
  }
`;

export const setDefaultPaymentMethodQuery = gql`
  mutation SetDefaultPaymentMethod($in: SetDefaultPaymentMethodRequestInput) {
    setDefaultPaymentMethod(in: $in) {
      success
    }
  }
`;
