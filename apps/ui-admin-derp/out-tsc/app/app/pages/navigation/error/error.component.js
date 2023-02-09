import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { MainService } from '@main/main.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
let ErrorComponent = class ErrorComponent {
    constructor(mainService, location, titleService) {
        this.mainService = mainService;
        this.location = location;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.mainService.templateClear = true;
        this.titleService.setTitle('Error - Swarm IO');
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ErrorComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ErrorComponent.prototype, "text", void 0);
ErrorComponent = __decorate([
    Component({
        selector: 'app-error',
        templateUrl: './error.component.html',
        styleUrls: ['./error.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService, Location, Title])
], ErrorComponent);
export { ErrorComponent };
//# sourceMappingURL=error.component.js.map