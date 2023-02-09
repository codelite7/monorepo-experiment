import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { MainService } from '../../main.service';
let DropdownHeaderComponent = class DropdownHeaderComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.stateOn = new EventEmitter();
    }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], DropdownHeaderComponent.prototype, "classBt", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], DropdownHeaderComponent.prototype, "state", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DropdownHeaderComponent.prototype, "stateOn", void 0);
DropdownHeaderComponent = __decorate([
    Component({
        selector: 'fz-dropdown-header',
        templateUrl: './dropdown-header.component.html',
        styleUrls: ['./dropdown-header.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService])
], DropdownHeaderComponent);
export { DropdownHeaderComponent };
//# sourceMappingURL=dropdown-header.component.js.map