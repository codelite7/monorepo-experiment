import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedComponent } from './components/authenticated/authenticated.component';
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";


@NgModule({
  declarations: [
    AuthenticatedComponent
  ],
  exports: [
    AuthenticatedComponent
  ],
  imports: [
    CommonModule,
    AmplifyAuthenticatorModule,
  ]
})
export class SharedModule { }
