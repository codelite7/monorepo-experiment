import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { Amplify } from 'aws-amplify';
// @ts-ignore
import awsmobile from '../aws-exports.js';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {SharedModule} from "./shared/shared.module";

Amplify.configure(awsmobile)

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AmplifyAuthenticatorModule,
        HttpClientModule,
        NgbModule,
        SharedModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
