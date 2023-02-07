import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
let GenericErrorComponent = class GenericErrorComponent {
    constructor(location) {
        this.location = location;
        this.title = 'ERROR';
        this.text = 'There was an error loading the page';
        this.icon = 'fa-exclamation-triangle';
        this.color = 'danger';
    }
    ngOnInit() { }
    refresh() {
        window.location.reload();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], GenericErrorComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GenericErrorComponent.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GenericErrorComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GenericErrorComponent.prototype, "color", void 0);
GenericErrorComponent = __decorate([
    Component({
        selector: 'app-generic-error',
        templateUrl: './generic-error.component.html',
        styleUrls: ['./generic-error.component.scss'],
    }),
    __metadata("design:paramtypes", [Location])
], GenericErrorComponent);
export { GenericErrorComponent };
//# sourceMappingURL=generic-error.component.js.map