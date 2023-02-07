import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../../../environment';
export interface Config {
  productionMode: boolean;
  firebase: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  };
  stripePublicKey: string;
  recaptchaPublicKey: string;
  domain: string;
  graphqlBaseUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config: Config;
  constructor(@Inject(APP_CONFIG) appConfig: AppConfig) {
    this.config = appConfig;
  }
}
