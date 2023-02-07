import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { COLORS, COLORTHEMES, GRAYCOLORS } from '@services/model';
let ModalDocColorsComponent = class ModalDocColorsComponent {
    constructor() {
        this.colors = COLORS;
        this.colorsTheme = COLORTHEMES;
        this.colorsGray = GRAYCOLORS;
        this.colorsControl = {
            gray: false,
            colors: false,
            colorsTheme: false,
        };
    }
    ngOnInit() { }
    show({ gray = false, colors = false, colorsTheme = false }) {
        if (gray) {
            this.colorsControl.gray = true;
        }
        if (colors) {
            this.colorsControl.colors = true;
        }
        if (colorsTheme) {
            this.colorsControl.colorsTheme = true;
        }
        this.modal.show();
    }
};
__decorate([
    ViewChild('modal'),
    __metadata("design:type", Object)
], ModalDocColorsComponent.prototype, "modal", void 0);
ModalDocColorsComponent = __decorate([
    Component({
        selector: 'fz-modal-doc-colors',
        templateUrl: './modal-doc-colors.component.html',
        styleUrls: ['./modal-doc-colors.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], ModalDocColorsComponent);
export { ModalDocColorsComponent };
//# sourceMappingURL=modal-doc-colors.component.js.map