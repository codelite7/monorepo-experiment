import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MainService } from '@main/main.service';
let ProgressComponent = class ProgressComponent {
    constructor(mainService) {
        this.mainService = mainService;
    }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], ProgressComponent.prototype, "height", void 0);
ProgressComponent = __decorate([
    Component({
        selector: 'fz-progress',
        templateUrl: './progress.component.html',
        styleUrls: ['./progress.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService])
], ProgressComponent);
export { ProgressComponent };
//# sourceMappingURL=progress.component.js.map