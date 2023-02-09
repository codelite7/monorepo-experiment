import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { LoadingGeneralService } from './loading-general.service';
import { FadeAnimation } from 'src/app/animation';
let LoadingGeneralComponent = class LoadingGeneralComponent {
    constructor(loadingGeneralService, elementRef) {
        this.loadingGeneralService = loadingGeneralService;
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.loadingGeneralService.loadingEvent.subscribe((res) => {
            this.elementRef.nativeElement.style.setProperty('--background-overlay', `var(--${this.loadingGeneralService.backgroundOverlay})`);
        });
    }
};
LoadingGeneralComponent = __decorate([
    Component({
        selector: 'fz-loading-general',
        templateUrl: './loading-general.component.html',
        styleUrls: ['./loading-general.component.scss'],
        encapsulation: ViewEncapsulation.None,
        animations: [FadeAnimation()],
    }),
    __metadata("design:paramtypes", [LoadingGeneralService, ElementRef])
], LoadingGeneralComponent);
export { LoadingGeneralComponent };
//# sourceMappingURL=loading-general.component.js.map