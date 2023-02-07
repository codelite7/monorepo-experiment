import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainService } from '@main/main.service';
let PanelTableComponent = class PanelTableComponent {
    constructor(mainService) {
        this.mainService = mainService;
    }
    ngOnInit() { }
};
PanelTableComponent = __decorate([
    Component({
        selector: 'fz-panel-table',
        templateUrl: './panel-table.component.html',
        styleUrls: ['./panel-table.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService])
], PanelTableComponent);
export { PanelTableComponent };
//# sourceMappingURL=panel-table.component.js.map