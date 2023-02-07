import { __decorate, __metadata } from "tslib";
import { Component, Input, ElementRef } from '@angular/core';
import { MainService } from '@main/main.service';
let LoadingCircleComponent = class LoadingCircleComponent {
    constructor(mainService, elementRef) {
        this.mainService = mainService;
        this.elementRef = elementRef;
        this.border = 4;
        this.size = 40;
        this.duration = 0.9;
        this.borderColor = 'primary';
    }
    ngOnInit() {
        if (!this.color && this.mainService.getDarkTheme()) {
            this.color = 'gray-800';
        }
        if (!this.color && !this.mainService.getDarkTheme()) {
            this.color = 'gray-300';
        }
        this.init(this.color, this.borderColor);
        this.darkModeEmit = this.mainService.darkModeEmit.subscribe((res) => {
            this.elementRef.nativeElement.style.setProperty('--border-left-color', `var(--${res ? 'gray-800' : 'gray-300'})`);
        });
    }
    ngOnChanges(changes) {
        const color = changes.color ? changes.color.currentValue : this.color;
        const borderColor = changes.borderColor ? changes.borderColor.currentValue : this.borderColor;
        this.init(color, borderColor);
    }
    ngOnDestroy() {
        this.darkModeEmit.unsubscribe();
    }
    init(color, borderColor) {
        this.elementRef.nativeElement.style.setProperty('--border-left-color', `var(--${color})`);
        this.elementRef.nativeElement.style.setProperty('--border-color', `var(--${borderColor})`);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoadingCircleComponent.prototype, "border", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoadingCircleComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoadingCircleComponent.prototype, "duration", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LoadingCircleComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LoadingCircleComponent.prototype, "borderColor", void 0);
LoadingCircleComponent = __decorate([
    Component({
        selector: 'fz-loading-circle',
        templateUrl: './loading-circle.component.html',
        styleUrls: ['./loading-circle.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService, ElementRef])
], LoadingCircleComponent);
export { LoadingCircleComponent };
//# sourceMappingURL=loading-circle.component.js.map