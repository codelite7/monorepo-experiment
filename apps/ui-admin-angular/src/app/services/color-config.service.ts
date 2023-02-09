import { Injectable, ElementRef } from '@angular/core';
import tinycolor from 'tinycolor2';

@Injectable({
  providedIn: 'root',
})
export class ColorConfigService {
  bodyStyles = window.getComputedStyle(document.body);

  constructor() {}

  /**
   * Get property
   */
  getPropertyValue(property: string) {
    return this.bodyStyles.getPropertyValue(property);
  }

  /**
   * Get the value of the css variable
   */
  getColor(color: string): string {
    const value = this.getPropertyValue(`--${color}`);
    return value ? value : color;
  }

  /**
   * Set property element
   */
  setPropertyElement(elementRef: ElementRef, property: string, value: string) {
    elementRef.nativeElement.style.setProperty(`--${property}`, value);
  }

  /**
   * I check if the color is dark
   */
  isDark(color: string): boolean {
    return tinycolor(this.getColor(color)).darken(10).isDark();
  }

  /**
   * Return color darken
   */
  colorDarken(color: string, valueDarken: number): string {
    if (color) {
      return tinycolor(this.getColor(color)).darken(valueDarken).toString();
    }
    return '';
  }
}
