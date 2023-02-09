import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';
let TabComponent = class TabComponent {
    constructor(tabs) {
        this.animate = 'fadeIn';
        this.disabled = false;
        tabs.pushTab(this);
    }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TabComponent.prototype, "active", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TabComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabComponent.prototype, "animate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabComponent.prototype, "disabled", void 0);
TabComponent = __decorate([
    Component({
        selector: 'fz-tab',
        templateUrl: './tab.component.html',
        styleUrls: ['./tab.component.scss'],
    }),
    __metadata("design:paramtypes", [TabGroupComponent])
], TabComponent);
export { TabComponent };
//# sourceMappingURL=tab.component.js.map