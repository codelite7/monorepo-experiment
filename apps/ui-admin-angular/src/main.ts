import { enableProdMode, ReflectiveInjector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ConfigService } from '@services/config/config.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from './environment';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // tslint:disable-next-line:no-console
  .catch((err) => console.error(err));
