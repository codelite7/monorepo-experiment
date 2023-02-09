import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import {
  attachPaymentMethodQuery,
  detachPaymentMethodQuery,
  getPaymentMethodsQuery,
  getUpcomingInvoiceQuery,
  listInvoicesQuery,
  setDefaultPaymentMethodQuery,
} from '@shared/graphql/queries/billing';
import { Invoice, PaymentMethod } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

export interface StripeCustomer {
  defaultPaymentMethodId: string;
}

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  authenticatedBaseurl: string;

  constructor(private apollo: Apollo) {}

  getPaymentMethods(): Observable<PaymentMethod[]> {
    return this.apollo
      .query({
        query: getPaymentMethodsQuery,
        variables: {
          in: {
            type: 'card',
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response.data?.paymentMethods?.payment_methods;
        })
      );
  }

  attachPaymentMethod(id): Observable<boolean> {
    return this.apollo
      .mutate({
        mutation: attachPaymentMethodQuery,
        variables: {
          in: {
            id,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.attachPaymentMethod?.success;
        })
      );
  }

  detachPaymentMethod(id): Observable<boolean> {
    return this.apollo
      .mutate({
        mutation: detachPaymentMethodQuery,
        variables: {
          in: {
            id,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.detachPaymentMethod?.success;
        })
      );
  }

  setDefaultPaymentMethod(id): Observable<any> {
    return this.apollo
      .mutate({
        mutation: setDefaultPaymentMethodQuery,
        variables: {
          in: {
            id,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.setDefaultPaymentMethod?.success;
        })
      );
  }

  listInvoices(subscriptionId, startingAfter, endingBefore, limit): Observable<Invoice[]> {
    return this.apollo
      .query({
        query: listInvoicesQuery,
        variables: {
          in: {
            subscription_id: subscriptionId,
            starting_after: startingAfter,
            ending_before: endingBefore,
            limit,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response.data?.invoices?.invoices;
        })
      );
  }

  getUpcomingInvoice(): Observable<Invoice> {
    return this.apollo
      .query({
        query: getUpcomingInvoiceQuery,
        variables: {
          in: {},
        },
      })
      .pipe(
        map((response: any) => {
          return response.data?.upcomingInvoice?.invoice;
        })
      );
  }
}
