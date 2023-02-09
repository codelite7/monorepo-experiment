import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { MainService } from '@main/main.service';
let ScrollbarComponent = class ScrollbarComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.stateMouseenter = true;
        this.scrollbar = false;
    }
    ngOnInit() {
        if (!this.stateMouseenter) {
            this.scrollbar = true;
        }
    }
    mouseEnter() {
        if (this.stateMouseenter) {
            this.scrollbar = true;
        }
    }
    mouseLeave() {
        if (this.stateMouseenter) {
            this.scrollbar = false;
        }
        else {
            this.scrollbar = true;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ScrollbarComponent.prototype, "classScrollbar", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ScrollbarComponent.prototype, "idScrollbar", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScrollbarComponent.prototype, "stateMouseenter", void 0);
ScrollbarComponent = __decorate([
    Component({
        selector: 'fz-scrollbar',
        templateUrl: './scrollbar.component.html',
        styleUrls: ['./scrollbar.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService])
], ScrollbarComponent);
export { ScrollbarComponent };
//# sourceMappingURL=scrollbar.component.js.map