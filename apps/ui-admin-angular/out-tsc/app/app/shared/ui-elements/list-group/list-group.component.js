import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { MainService } from '@main/main.service';
let ListGroupComponent = class ListGroupComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.flush = false;
    }
    ngOnInit() { }
    get classHorizontal() {
        if (this.horizontal) {
            return this.horizontal === 'default' ? `list-group-horizontal` : `list-group-horizontal-${this.horizontal}`;
        }
        return '';
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ListGroupComponent.prototype, "flush", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ListGroupComponent.prototype, "horizontal", void 0);
ListGroupComponent = __decorate([
    Component({
        selector: 'fz-list-group',
        templateUrl: './list-group.component.html',
        styleUrls: ['./list-group.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService])
], ListGroupComponent);
export { ListGroupComponent };
//# sourceMappingURL=list-group.component.js.map