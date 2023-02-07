import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { ConsoleGuard, redirectLoggedInToDashboard } from './route-guards';

const routes: Routes = [
  // empty path redirects to console
  { path: '', redirectTo: 'console', pathMatch: 'full' },
  // console is authenticated path for verified, active subscriptions
  {
    path: 'console',
    canActivateChild: [ConsoleGuard],
    loadChildren: () => import('./pages/navigation/console/console.module').then((m) => m.ConsoleModule),
  },
  // verify is for account verification pages like email verification and initial payment
  {
    path: 'verify',
    loadChildren: () => import('./pages/navigation/verify/verify.module').then((m) => m.VerifyModule),
  },
  // login / signup / etc
  {
    path: 'login',
    loadChildren: () => import('./pages/navigation/login2/login2.module').then((m) => m.Login2Module),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/navigation/register2/register2.module').then((m) => m.Register2Module),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'recover-password',
    loadChildren: () =>
      import('./pages/navigation/recover-password2/recover-password2.module').then((m) => m.RecoverPassword2Module),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  // unauthorized paths
  {
    path: 'account',
    loadChildren: () => import('./pages/navigation/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/navigation/error/error.module').then((m) => m.ErrorModule),
    canActivate: [],
  },
  {
    path: 'error-server',
    loadChildren: () => import('./pages/navigation/error-server/error-server.module').then((m) => m.ErrorServerModule),
    canActivate: [],
  },
  { path: '**', redirectTo: 'error/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
  providers: [ConsoleGuard],
})
export class AppRoutingModule {}
