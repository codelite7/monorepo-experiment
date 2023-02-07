import { __decorate, __metadata } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
let LoadingGeneralService = class LoadingGeneralService {
    constructor() {
        this.status = false;
        this.type = 1;
        this.areaCard = true;
        this.backgroundOverlay = 'gray-800';
        this.statusOverlay = true;
        this.color = 'primary';
        this.icon = 'fas fa-cog fa-spin';
        this.loadingEvent = new EventEmitter();
    }
    /**
     * Set options loading
     *
     * @param {*} value
     * @returns
     */
    setOptions(value) {
        const { type, areaCard, backgroundOverlay, color, statusOverlay, icon } = value;
        this.type = type !== null && type !== void 0 ? type : 1;
        this.areaCard = areaCard !== null && areaCard !== void 0 ? areaCard : true;
        this.backgroundOverlay = backgroundOverlay !== null && backgroundOverlay !== void 0 ? backgroundOverlay : 'gray-900';
        this.color = color !== null && color !== void 0 ? color : 'primary';
        this.statusOverlay = statusOverlay !== null && statusOverlay !== void 0 ? statusOverlay : true;
        this.icon = icon !== null && icon !== void 0 ? icon : 'fas fa-cog fa-spin';
        return this;
    }
    /**
     * Show close and close time
     *
     * @param {number} [duration]
     */
    show(duration) {
        this.status = true;
        this.loadingEvent.emit(true);
        if (duration) {
            this.closeTime(duration);
        }
    }
    /**
     * Hide loading
     *
     * @param {number} [duration]
     */
    hide(duration) {
        if (!duration) {
            this.hideFunc();
        }
        if (duration) {
            this.closeTime(duration);
        }
    }
    /**
     * Hide
     *
     * @private
     */
    hideFunc() {
        this.status = false;
        this.loadingEvent.emit(false);
    }
    /**
     * Close loading time
     *
     * @private
     * @param {number} time
     */
    closeTime(time) {
        clearTimeout(this.timec);
        this.timec = setTimeout(() => this.hideFunc(), time);
    }
};
LoadingGeneralService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [])
], LoadingGeneralService);
export { LoadingGeneralService };
//# sourceMappingURL=loading-general.service.js.map