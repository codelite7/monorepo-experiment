import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, ReflectiveInjector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MainModule } from '@main/main.module';
import { MainComponent } from '@main/main.component';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { SharedModule } from '@shared/shared.module';
import { NgxStripeModule } from 'ngx-stripe';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ClipboardModule } from 'ngx-clipboard';
import { GraphQLModule } from './graphql.module';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HighlightModule,
    MainModule,
    AngularFireAnalyticsModule,
    SharedModule,
    RecaptchaV3Module,
    NgMultiSelectDropDownModule.forRoot(),
    ClipboardModule,
    AngularFireModule, // config is lazy loaded via provider in the providers array below
    NgxStripeModule.forRoot(),
    GraphQLModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: FIREBASE_OPTIONS, // provides the firebase config which allows lazy loading by merging overrides with defaults
      useValue: environment.firebase,
    },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptchaPublicKey,
    },
    DatePipe,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/highlight'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
