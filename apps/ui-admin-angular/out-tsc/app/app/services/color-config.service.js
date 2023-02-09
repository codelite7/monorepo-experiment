import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import tinycolor from 'tinycolor2';
let ColorConfigService = class ColorConfigService {
    constructor() {
        this.bodyStyles = window.getComputedStyle(document.body);
    }
    /**
     * Get property
     */
    getPropertyValue(property) {
        return this.bodyStyles.getPropertyValue(property);
    }
    /**
     * Get the value of the css variable
     */
    getColor(color) {
        const value = this.getPropertyValue(`--${color}`);
        return value ? value : color;
    }
    /**
     * Set property element
     */
    setPropertyElement(elementRef, property, value) {
        elementRef.nativeElement.style.setProperty(`--${property}`, value);
    }
    /**
     * I check if the color is dark
     */
    isDark(color) {
        return tinycolor(this.getColor(color)).darken(10).isDark();
    }
    /**
     * Return color darken
     */
    colorDarken(color, valueDarken) {
        if (color) {
            return tinycolor(this.getColor(color)).darken(valueDarken).toString();
        }
        return '';
    }
};
ColorConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [])
], ColorConfigService);
export { ColorConfigService };
//# sourceMappingURL=color-config.service.js.map