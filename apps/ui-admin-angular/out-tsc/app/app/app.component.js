import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { MainService } from '@main/main.service';
let AppComponent = class AppComponent {
    constructor(loadingService, mainService) {
        this.loadingService = loadingService;
        this.mainService = mainService;
        // loading general
        loadingService.setOptions({ statusOverlay: false }).show();
        // verify webp support
        Modernizr.on('webp', (result) => (this.mainService.webpSupport = result ? true : false));
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
    }),
    __metadata("design:paramtypes", [LoadingGeneralService, MainService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map