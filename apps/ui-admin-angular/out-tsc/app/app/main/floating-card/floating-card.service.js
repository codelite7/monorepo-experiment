import { __decorate, __metadata } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
let FloatingCardService = class FloatingCardService {
    constructor() {
        this.position = 'right-bottom';
        this.padding = true;
        this.width = '450px';
        this.height = 'auto';
        this.loadEmit = new EventEmitter();
        this.stateEmit = new EventEmitter();
    }
    /**
     * Set options
     *
     * @param {*} value
     * @returns
     */
    setOptions(value) {
        const { position, padding, width, height, minHeight } = value;
        this.position = position !== null && position !== void 0 ? position : 'right-bottom';
        this.padding = padding !== null && padding !== void 0 ? padding : true;
        this.width = width !== null && width !== void 0 ? width : '480px';
        this.height = height !== null && height !== void 0 ? height : 'auto';
        this.minHeight = minHeight;
        return this;
    }
    /**
     * Load component
     *
     * @param {*} value
     */
    load(value) {
        this.loadEmit.emit(value);
    }
    /**
     * Show floating card
     */
    show() {
        this.state = true;
        this.stateEmit.emit(true);
    }
    /**
     * Close floating card
     */
    hide() {
        this.state = false;
        this.stateEmit.emit(false);
    }
};
FloatingCardService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [])
], FloatingCardService);
export { FloatingCardService };
//# sourceMappingURL=floating-card.service.js.map