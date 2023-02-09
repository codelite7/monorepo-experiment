import { Component } from '@angular/core';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { MainService } from '@main/main.service';

declare const Modernizr: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public loadingService: LoadingGeneralService, public mainService: MainService) {
    // loading general
    loadingService.setOptions({ statusOverlay: false }).show();

    // verify webp support
    Modernizr.on('webp', (result) => (this.mainService.webpSupport = result ? true : false));
  }
}
