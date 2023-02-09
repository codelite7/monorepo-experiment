import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { MainService } from '@main/main.service';
let DropdownComponent = class DropdownComponent {
    constructor(mainService, elementRef) {
        this.mainService = mainService;
        this.elementRef = elementRef;
        this.classContainer = 'd-flex flex-column';
        this.direction = 'auto';
        this.trigger = 'click';
        this.animation = 'shift-away';
        this.hoverItem = 'color';
        this.arrow = true;
        this.show = false;
        this.closeClickOutside = true;
        this.contentPadding0 = false;
        this.stateOn = new EventEmitter();
    }
    ngOnInit() { }
    get cTheme() {
        let color;
        if (this.theme) {
            color = this.theme;
        }
        if (!this.theme) {
            color = this.mainService.getDarkTheme() ? 'dark' : 'light';
        }
        this.elementRef.nativeElement.style.setProperty('--dropdown-arrow-color', `var(--${color})`);
        if (this.mainService.getDarkTheme()) {
            this.elementRef.nativeElement.style.setProperty('--dropdown-shadow', `0.9`);
        }
        else {
            this.elementRef.nativeElement.style.setProperty('--dropdown-shadow', `0.28`);
        }
        return color;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "classBt", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "classContainer", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "direction", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "trigger", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "animation", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "theme", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DropdownComponent.prototype, "hoverItem", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "arrow", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "maxWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DropdownComponent.prototype, "zIndex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "show", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DropdownComponent.prototype, "state", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "closeClickOutside", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "appendTo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "contentPadding0", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DropdownComponent.prototype, "minWidth", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "stateOn", void 0);
DropdownComponent = __decorate([
    Component({
        selector: 'fz-dropdown',
        templateUrl: './dropdown.component.html',
        styleUrls: ['./dropdown.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService, ElementRef])
], DropdownComponent);
export { DropdownComponent };
//# sourceMappingURL=dropdown.component.js.map