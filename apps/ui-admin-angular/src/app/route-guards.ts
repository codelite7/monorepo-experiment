import { map, mergeMap } from 'rxjs/operators';
import { redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import firebase from 'firebase/compat';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import User = firebase.User;

export const redirectLoggedInToDashboard = () => redirectLoggedInTo(['console']);

const changePasswordPath = '/console/account/changepassword';
const accountPath = '/console/account';
const newAccountPath = '/console/account/new';

export const verifyEmailGuard = () =>
  map((user: User) => {
    if (!user) {
      // no user, redirect to login
      return ['/login'];
    } else if (user.emailVerified) {
      // authenticated verified user, redirect to home
      return ['/'];
    } else {
      // show page
      return true;
    }
  });

export const newSubscriptionGuard = () =>
  mergeMap((user: User) => {
    if (!user || !user.emailVerified) {
      // redirect unauthorized or unverified to root, which will reroute accordingly
      return ['/'];
    } else {
      // authenticated and verified user, if they don't need to subscribe, redirect to root
      return user.getIdTokenResult().then((token) => {
        const subscriptionStatus = token.claims?.subscriptionStatus;
        if (subscriptionStatus !== 'needed') {
          // redirect to root
          return ['/'];
        } else {
          return true;
        }
      });
    }
  });

@Injectable()
export class ConsoleGuard implements CanActivateChild {
  constructor(
      public router: Router,
      private auth: AngularFireAuth,
  ) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return combineLatest([this.auth.user, this.auth.idTokenResult]).pipe(
      map(([user, idTokenResult]) => {
        if (!user) {
          // no user, redirect to login
          return this.router.createUrlTree(['/login']);
        } else if (user && !user.emailVerified) {
          // user, but not verified, redirect to verify-email
          return this.router.createUrlTree(['/verify/email']);
        } else {
          const subscriptionStatus = idTokenResult?.claims?.subscriptionStatus;
          const requirePasswordReset = idTokenResult?.claims?.requirePasswordReset;
          if (subscriptionStatus === undefined && state.url !== newAccountPath) {
              return this.router.createUrlTree([newAccountPath])
          }
          if (subscriptionStatus === 'cancelled') {
            // subscription has been cancelled, only allow /console/account path
            if (state.url.startsWith(accountPath)) {
              // allowed
              return true;
            } else {
              // redirect to profile
              return this.router.createUrlTree(['/console/account/profile']);
            }
          } else if (subscriptionStatus === 'needed') {
            // verified user, no subscription yet
            return this.router.createUrlTree(['/verify/payment']);
            // check router state, since we're redirecting from /console pages to /console/account/changepassword in the next block
            // you can get in an infinite loop
          } else if (requirePasswordReset === true && state.url !== changePasswordPath) {
            // invited user, needs to reset password
            return this.router.createUrlTree([changePasswordPath]);
          } else {
            // verified, subscribed, all good
            return true;
          }
        }
      })
    );
  }
}
