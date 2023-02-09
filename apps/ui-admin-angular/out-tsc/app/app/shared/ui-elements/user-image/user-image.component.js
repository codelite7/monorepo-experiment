import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { MainService } from '@main/main.service';
let UserImageComponent = class UserImageComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.ext = 'jpg';
        this.disabledWebpAuto = false;
    }
    ngOnInit() { }
    get srcC() {
        if (this.disabledWebpAuto) {
            return `${this.src}.${this.ext}`;
        }
        return this.mainService.webpSupport ? `${this.src}.webp` : `${this.src}.${this.ext}`;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], UserImageComponent.prototype, "src", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], UserImageComponent.prototype, "alt", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], UserImageComponent.prototype, "widthHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], UserImageComponent.prototype, "imgClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], UserImageComponent.prototype, "ext", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], UserImageComponent.prototype, "disabledWebpAuto", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], UserImageComponent.prototype, "state", void 0);
UserImageComponent = __decorate([
    Component({
        selector: 'fz-user-image',
        templateUrl: './user-image.component.html',
        styleUrls: ['./user-image.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService])
], UserImageComponent);
export { UserImageComponent };
//# sourceMappingURL=user-image.component.js.map