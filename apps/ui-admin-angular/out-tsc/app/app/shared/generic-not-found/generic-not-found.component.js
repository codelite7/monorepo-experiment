import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let GenericNotFoundComponent = class GenericNotFoundComponent {
    constructor() {
        this.title = 'NOT FOUND';
        this.text = 'The page you were looking for was not found';
        this.icon = 'fa-exclamation-triangle';
        this.color = 'warning';
    }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], GenericNotFoundComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GenericNotFoundComponent.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GenericNotFoundComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GenericNotFoundComponent.prototype, "color", void 0);
GenericNotFoundComponent = __decorate([
    Component({
        selector: 'app-generic-not-found',
        templateUrl: './generic-not-found.component.html',
        styleUrls: ['./generic-not-found.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], GenericNotFoundComponent);
export { GenericNotFoundComponent };
//# sourceMappingURL=generic-not-found.component.js.map