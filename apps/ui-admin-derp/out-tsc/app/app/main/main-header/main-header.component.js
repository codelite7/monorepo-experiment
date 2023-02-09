import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { MainService } from '../main.service';
let MainHeaderComponent = class MainHeaderComponent {
    constructor(mainService) {
        this.mainService = mainService;
    }
    ngOnInit() { }
};
MainHeaderComponent = __decorate([
    Component({
        selector: 'fz-main-header',
        templateUrl: './main-header.component.html',
        styleUrls: ['./main-header.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService])
], MainHeaderComponent);
export { MainHeaderComponent };
//# sourceMappingURL=main-header.component.js.map