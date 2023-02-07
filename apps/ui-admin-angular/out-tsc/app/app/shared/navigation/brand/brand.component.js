import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { MainService } from '@main/main.service';
let BrandComponent = class BrandComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.tag = 'a';
        this.large = false;
        this.exLarge = false;
        this.text = 'ADMIN';
    }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], BrandComponent.prototype, "tag", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BrandComponent.prototype, "large", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BrandComponent.prototype, "exLarge", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], BrandComponent.prototype, "classBrand", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], BrandComponent.prototype, "text", void 0);
BrandComponent = __decorate([
    Component({
        selector: 'fz-brand',
        templateUrl: './brand.component.html',
        styleUrls: ['./brand.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainService])
], BrandComponent);
export { BrandComponent };
//# sourceMappingURL=brand.component.js.map