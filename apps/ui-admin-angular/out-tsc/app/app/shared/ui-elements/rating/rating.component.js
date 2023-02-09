import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let RatingComponent = class RatingComponent {
    constructor() {
        /**
         * Max stars
         */
        this.max = 5;
        /**
         * Font Awesome class
         */
        this.icon = 'fas fa-star';
        /**
         * Readonly
         */
        this.readonly = false;
        /**
         * Shadow star
         */
        this.shadow = true;
        /**
         * Color active
         *
         * @type {(ColorTheme | Colors)}
         */
        this.colorActive = 'warning';
        /**
         * Color inactive
         *
         * @type {(ColorTheme | Colors | GrayColors)}
         */
        this.colorInactive = 'gray-200';
        /**
         * Rate Change
         */
        this.rateChange = new EventEmitter();
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        this.init();
    }
    /**
     * Defaults functions
     */
    init() {
        this._rateOld = this.rate;
        this.stars = [];
        for (let index = 0; index < this.max; index++) {
            this.stars.push(index + 1);
        }
    }
    /**
     * color start mouseenter
     *
     * @param {number} item
     */
    colorStar(item) {
        if (!this.readonly) {
            this.rate = item;
        }
    }
    /**
     * Selected color click
     *
     * @param {number} item
     */
    selected(item) {
        if (!this.readonly) {
            this.rate = item;
            this._rateOld = item;
            this.rateChange.emit(this.rate);
        }
    }
    /**
     * Reset color
     */
    reset() {
        if (!this.readonly) {
            this.rate = this._rateOld;
        }
    }
    /**
     * Color item
     *
     * @param {number} item
     * @returns
     */
    colorItem(item) {
        if (this.colorsActive) {
            return item <= this.rate ? this.colorsActive[item - 1] : this.colorInactive;
        }
        return item <= this.rate ? this.colorActive : this.colorInactive;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], RatingComponent.prototype, "rate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "shadow", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RatingComponent.prototype, "colorActive", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], RatingComponent.prototype, "colorsActive", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RatingComponent.prototype, "colorInactive", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], RatingComponent.prototype, "rateChange", void 0);
RatingComponent = __decorate([
    Component({
        selector: 'fz-rating',
        templateUrl: './rating.component.html',
        styleUrls: ['./rating.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], RatingComponent);
export { RatingComponent };
//# sourceMappingURL=rating.component.js.map