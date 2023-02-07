import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input } from '@angular/core';
import { MainService } from '@main/main.service';
let LoadingBarComponent = class LoadingBarComponent {
    constructor(mainService, elementRef) {
        this.mainService = mainService;
        this.elementRef = elementRef;
        this.color = 'primary';
        this.heightLine = 3;
    }
    ngOnInit() {
        if (!this.colorLine && this.mainService.getDarkTheme()) {
            this.colorLine = 'gray-800';
        }
        if (!this.colorLine && !this.mainService.getDarkTheme()) {
            this.colorLine = 'gray-300';
        }
        this.init(this.color, this.colorLine, this.heightLine);
        this.darkModeEmit = this.mainService.darkModeEmit.subscribe((res) => {
            this.elementRef.nativeElement.style.setProperty('--color-line', `var(--${res ? 'gray-800' : 'gray-300'})`);
        });
    }
    ngOnChanges(changes) {
        const color = changes.color ? changes.color.currentValue : this.color;
        const colorLine = changes.colorLine ? changes.colorLine.currentValue : this.colorLine;
        const heightLine = changes.heightLine ? changes.heightLine.currentValue : this.heightLine;
        this.init(color, colorLine, heightLine);
    }
    ngOnDestroy() {
        this.darkModeEmit.unsubscribe();
    }
    init(color, colorLine, heightLine) {
        this.elementRef.nativeElement.style.setProperty('--height-line', `${heightLine}px`);
        this.elementRef.nativeElement.style.setProperty('--color', `var(--${color})`);
        this.elementRef.nativeElement.style.setProperty('--color-line', `var(--${colorLine})`);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], LoadingBarComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LoadingBarComponent.prototype, "colorLine", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoadingBarComponent.prototype, "heightLine", void 0);
LoadingBarComponent = __decorate([
    Component({
        selector: 'fz-loading-bar',
        templateUrl: './loading-bar.component.html',
        styleUrls: ['./loading-bar.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService, ElementRef])
], LoadingBarComponent);
export { LoadingBarComponent };
//# sourceMappingURL=loading-bar.component.js.map