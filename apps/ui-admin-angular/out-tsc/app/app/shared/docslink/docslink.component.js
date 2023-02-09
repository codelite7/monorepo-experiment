import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let DocslinkComponent = class DocslinkComponent {
    constructor() {
        this.link = '';
    }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], DocslinkComponent.prototype, "link", void 0);
DocslinkComponent = __decorate([
    Component({
        selector: 'app-docslink',
        templateUrl: './docslink.component.html',
        styleUrls: ['./docslink.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], DocslinkComponent);
export { DocslinkComponent };
//# sourceMappingURL=docslink.component.js.map