import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { Account } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';
import { cancelSubscriptionQuery, createAccountQuery, createSubscriptionQuery } from '@shared/graphql/queries/accounts';

export interface Subdomain {
  id: string;
  updatedAt: string;
  subdomain: string;
  accountUuid: string;
}

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private apollo: Apollo) {}

  createAccount(plan, email, password, paymentMethodId, recaptchaToken: string): Observable<Account> {
    return this.apollo
      .mutate({
        mutation: createAccountQuery,
        variables: {
          in: {
            email,
            password,
            plan,
            payment_method_id: paymentMethodId,
            recaptcha_token: recaptchaToken,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.createAccount?.account;
        })
      );
  }

  createSubscription(paymentMethodId: string): Observable<boolean> {
    return this.apollo
      .mutate({
        mutation: createSubscriptionQuery,
        variables: {
          in: {
            payment_method_id: paymentMethodId,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.createSubscription?.success;
        })
      );
  }

  cancelSubscription(): Observable<boolean> {
    return this.apollo
      .mutate({
        mutation: cancelSubscriptionQuery,
        variables: {
          in: {
            account_id: '',
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.cancelSubscription?.success;
        })
      );
  }

  setSubdomain(subdomain: string): Observable<void> {
    return of();
  }

  getSubdomain(): Observable<Subdomain> {
    return of();
  }
}
