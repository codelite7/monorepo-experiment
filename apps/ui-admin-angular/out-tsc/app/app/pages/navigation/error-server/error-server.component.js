import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainService } from '@main/main.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
let ErrorServerComponent = class ErrorServerComponent {
    constructor(mainService, location, titleService) {
        this.mainService = mainService;
        this.location = location;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.mainService.templateClear = true;
        this.titleService.setTitle('Error server - Swarm IO');
    }
};
ErrorServerComponent = __decorate([
    Component({
        selector: 'app-error-server',
        templateUrl: './error-server.component.html',
        styleUrls: ['./error-server.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService, Location, Title])
], ErrorServerComponent);
export { ErrorServerComponent };
//# sourceMappingURL=error-server.component.js.map