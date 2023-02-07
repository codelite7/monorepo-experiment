import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainService } from '../main.service';
let MainFooterComponent = class MainFooterComponent {
    constructor(mainService) {
        this.mainService = mainService;
    }
    ngOnInit() { }
};
MainFooterComponent = __decorate([
    Component({
        selector: 'fz-main-footer',
        templateUrl: './main-footer.component.html',
        styleUrls: ['./main-footer.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService])
], MainFooterComponent);
export { MainFooterComponent };
//# sourceMappingURL=main-footer.component.js.map