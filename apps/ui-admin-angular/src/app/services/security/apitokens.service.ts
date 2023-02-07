import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiToken } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';
import { createApiTokenQuery, deleteApiTokenQuery, listApiTokensQuery } from '@shared/graphql/queries/api-tokens';
import { ListApiTokensQuery } from '../../pages/navigation/console/security/api-keys/api-tokens.component';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ApitokensService {
  authenticatedBaseurl: string;

  constructor(private apollo: Apollo) {}

  getApitokens(): Observable<ApiToken[] | undefined> {
    return this.apollo
      .subscribe<ListApiTokensQuery>({
        query: listApiTokensQuery,
      })
      .pipe(
        map((result) => {
          return result.data?.apiTokens?.tokens;
        })
      );
  }

  createApitoken(name: string): Observable<boolean> {
    return this.apollo
      .mutate({
        mutation: createApiTokenQuery,
        variables: {
          in: {
            name,
          },
        },
      })
      .pipe(
        map(({ data }) => {
          return true;
        })
      );
  }

  deleteApitoken(name: string): Observable<any> {
    return this.apollo
      .mutate({
        mutation: deleteApiTokenQuery,
        variables: {
          in: {
            name,
          },
        },
      })
      .pipe(
        map(({ data }) => {
          return true;
        })
      );
  }
}
