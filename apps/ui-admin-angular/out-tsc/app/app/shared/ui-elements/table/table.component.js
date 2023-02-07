import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MainService } from '@main/main.service';
let TableComponent = class TableComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.striped = true;
        this.bordered = false;
        this.borderless = true;
        this.hover = true;
        this.small = false;
        this.responsive = true;
        this.shadow = false;
        this.theadDark = false;
        this.theadLight = false;
    }
    ngOnInit() { }
    get cDark() {
        if (this.dark === true || this.dark === false) {
            return this.dark;
        }
        return this.mainService.getDarkTheme() ? true : false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "striped", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "bordered", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "borderless", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TableComponent.prototype, "dark", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "hover", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "small", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "responsive", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "shadow", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "theadDark", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "theadLight", void 0);
TableComponent = __decorate([
    Component({
        selector: 'fz-table',
        templateUrl: './table.component.html',
        styleUrls: ['./table.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService])
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map