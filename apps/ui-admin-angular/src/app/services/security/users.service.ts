import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { changePasswordQuery, deleteUserQuery, inviteUserQuery, listUsersQuery } from '@shared/graphql/queries/users';
import { User } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private auth: AngularFireAuth, private apollo: Apollo) {}

  listUsers(): Observable<User[]> {
    return this.apollo
      .query({
        query: listUsersQuery,
      })
      .pipe(
        map((response: any) => {
          return response.data?.users?.users;
        })
      );
  }

  // TODO handle the redirect stuff
  inviteUser(email: string): Observable<void> {
    return this.apollo
      .mutate({
        mutation: inviteUserQuery,
        variables: {
          in: {
            email,
          },
        },
      })
      .pipe(
        map((response: any) => {
            if (response.errors) {
                throw response.errors
            }
          const actionCodeSettings = {
            url: `${window.location}`,
            // handleCodeInApp must be true when sending email signin links
            handleCodeInApp: true,
          };
          this.auth.sendSignInLinkToEmail(email, actionCodeSettings);
        })
      );
  }

  changePassword(password: string): Observable<void> {
    return this.apollo
      .mutate({
        mutation: changePasswordQuery,
        variables: {
          in: {
            password,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.changePassword?.success;
        })
      );
  }

  deleteUser(email: string): Observable<any> {
    return this.apollo
      .mutate({
        mutation: deleteUserQuery,
        variables: {
          in: {
            email,
          },
        },
      })
      .pipe(
        map((response: any) => {
          return response?.data?.deleteUser?.success;
        })
      );
  }
}
