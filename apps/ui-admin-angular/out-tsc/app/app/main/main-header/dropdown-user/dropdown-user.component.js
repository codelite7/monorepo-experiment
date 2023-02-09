import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainService } from '../../main.service';
let DropdownUserComponent = class DropdownUserComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.state = true;
    }
    ngOnInit() { }
    fullScreen() {
        this.state = false;
        this.mainService.fullScreenWindowId('main');
    }
};
DropdownUserComponent = __decorate([
    Component({
        selector: 'fz-dropdown-user',
        templateUrl: './dropdown-user.component.html',
        styleUrls: ['./dropdown-user.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService])
], DropdownUserComponent);
export { DropdownUserComponent };
//# sourceMappingURL=dropdown-user.component.js.map