import { __decorate, __metadata } from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
import { MainService } from '@main/main.service';
let CircularProgressComponent = class CircularProgressComponent {
    constructor(mainService, elementRef) {
        this.mainService = mainService;
        this.elementRef = elementRef;
        /**
         * Size
         *
         * @type {number}
         */
        this.size = 0;
        /**
         * Circle color
         *
         * @type {(Colors | ColorTheme)}
         */
        this.color = 'dark';
        /**
         * Stroke circle
         *
         * @type {number}
         */
        this.strokeCircle = 3;
        /**
         * Stroke circle bg
         *
         * @type {number}
         */
        this.strokeCircleBg = 2.5;
    }
    ngOnInit() {
        this.addProperty();
        this.addPropertyDarkTheme(this.mainService.getDarkTheme());
        this.darkModeEmit = this.mainService.darkModeEmit.subscribe((res) => this.addPropertyDarkTheme(res));
    }
    ngOnChanges(changes) {
        this.addProperty();
    }
    ngOnDestroy() {
        this.darkModeEmit.unsubscribe();
    }
    addProperty() {
        if (this.color) {
            this.elementRef.nativeElement.style.setProperty('--circle-color', `var(--${this.color})`);
        }
        if (this.animationTime) {
            this.elementRef.nativeElement.style.setProperty('--animation-time', this.animationTime);
        }
        if (this.strokeCircle) {
            this.elementRef.nativeElement.style.setProperty('--stroke-circle', this.strokeCircle);
        }
        if (this.strokeCircleBg) {
            this.elementRef.nativeElement.style.setProperty('--stroke-circle-bg', this.strokeCircleBg);
        }
    }
    addPropertyDarkTheme(dark) {
        this.elementRef.nativeElement.style.setProperty('--stroke-circle-color', `var(--${dark ? 'gray-700' : 'gray-200'})`);
        this.elementRef.nativeElement.style.setProperty('--text-color', `var(--${dark ? 'gray-100' : 'gray-600'})`);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], CircularProgressComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CircularProgressComponent.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CircularProgressComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CircularProgressComponent.prototype, "animationTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CircularProgressComponent.prototype, "strokeCircle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CircularProgressComponent.prototype, "strokeCircleBg", void 0);
CircularProgressComponent = __decorate([
    Component({
        selector: 'fz-circular-progress',
        templateUrl: './circular-progress.component.html',
        styleUrls: ['./circular-progress.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService, ElementRef])
], CircularProgressComponent);
export { CircularProgressComponent };
//# sourceMappingURL=circular-progress.component.js.map