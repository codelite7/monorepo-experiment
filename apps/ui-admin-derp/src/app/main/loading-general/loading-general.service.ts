import { Injectable, EventEmitter } from '@angular/core';
import { Colors, ColorTheme, GrayColors } from '@services/model';

@Injectable({
  providedIn: 'root',
})
export class LoadingGeneralService {
  status = false;

  type: 1 | 2 | 3 | 4 | 5 = 1;

  areaCard = true;

  backgroundOverlay: Colors | ColorTheme | GrayColors = 'gray-800';

  statusOverlay = true;

  color: Colors | ColorTheme | GrayColors = 'primary';

  icon = 'fas fa-cog fa-spin';

  timec: any;

  loadingEvent = new EventEmitter();

  constructor() {}

  /**
   * Set options loading
   *
   * @param {*} value
   * @returns
   */
  setOptions(value: any) {
    const { type, areaCard, backgroundOverlay, color, statusOverlay, icon } = value;

    this.type = type ?? 1;
    this.areaCard = areaCard ?? true;
    this.backgroundOverlay = backgroundOverlay ?? 'gray-900';
    this.color = color ?? 'primary';
    this.statusOverlay = statusOverlay ?? true;
    this.icon = icon ?? 'fas fa-cog fa-spin';

    return this;
  }

  /**
   * Show close and close time
   *
   * @param {number} [duration]
   */
  show(duration?: number) {
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
  hide(duration?: number) {
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
  private hideFunc() {
    this.status = false;
    this.loadingEvent.emit(false);
  }

  /**
   * Close loading time
   *
   * @private
   * @param {number} time
   */
  private closeTime(time: number) {
    clearTimeout(this.timec);
    this.timec = setTimeout(() => this.hideFunc(), time);
  }
}
