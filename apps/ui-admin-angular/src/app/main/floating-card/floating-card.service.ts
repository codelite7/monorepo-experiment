import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FloatingCardService {
  state: boolean;

  position: 'left-bottom' | 'right-bottom' = 'right-bottom';

  padding = true;

  width = '450px';

  height = 'auto';

  minHeight: string;

  loadEmit = new EventEmitter();

  stateEmit = new EventEmitter();

  constructor() {}

  /**
   * Set options
   *
   * @param {*} value
   * @returns
   */
  setOptions(value: any) {
    const { position, padding, width, height, minHeight } = value;

    this.position = position ?? 'right-bottom';
    this.padding = padding ?? true;
    this.width = width ?? '480px';
    this.height = height ?? 'auto';
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
}
