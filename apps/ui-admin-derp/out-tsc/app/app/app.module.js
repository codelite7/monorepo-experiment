import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MainModule } from '@main/main.module';
import { MainComponent } from '@main/main.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from '../environments/environment';
import { SharedModule } from '@shared/shared.module';
import { NgxStripeModule } from 'ngx-stripe';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ClipboardModule } from 'ngx-clipboard';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent, MainComponent],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            HttpClientModule,
            HighlightModule,
            MainModule,
            AngularFireModule.initializeApp(environment.firebase),
            NgxStripeModule.forRoot(environment.stripePublicKey),
            AngularFireAnalyticsModule,
            SharedModule,
            RecaptchaV3Module,
            NgMultiSelectDropDownModule.forRoot(),
            ClipboardModule,
        ],
        providers: [
            DatePipe,
            {
                provide: HIGHLIGHT_OPTIONS,
                useValue: {
                    coreLibraryLoader: () => import('highlight.js/lib/highlight'),
                    lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
                    languages: {
                        typescript: () => import('highlight.js/lib/languages/typescript'),
                        css: () => import('highlight.js/lib/languages/css'),
                        xml: () => import('highlight.js/lib/languages/xml'),
                    },
                },
            },
            {
                provide: RECAPTCHA_V3_SITE_KEY,
                useValue: environment.recaptchaPublicKey,
            },
        ],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map