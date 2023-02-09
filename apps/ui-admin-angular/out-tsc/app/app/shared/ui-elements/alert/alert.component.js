import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
let AlertComponent = class AlertComponent {
    constructor() {
        this.show = true;
        this.color = 'primary';
        this.buttonClose = false;
    }
    ngOnInit() {
        this.closeAlertTime();
    }
    ngOnChanges(changes) {
        this.closeAlertTime();
    }
    closeAlertTime() {
        if (this.timeClose) {
            setTimeout(() => (this.show = false), this.timeClose);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], AlertComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "buttonClose", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AlertComponent.prototype, "timeClose", void 0);
AlertComponent = __decorate([
    Component({
        selector: 'fz-alert',
        templateUrl: './alert.component.html',
        styleUrls: ['./alert.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [])
], AlertComponent);
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map