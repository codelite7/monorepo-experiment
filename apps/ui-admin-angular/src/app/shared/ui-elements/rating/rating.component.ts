import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ColorTheme, Colors, GrayColors } from '@services/model';

@Component({
  selector: 'fz-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  /**
   * Max stars
   */
  @Input() max = 5;

  /**
   * Rate
   *
   * @type {number}
   */
  @Input() rate: number;

  /**
   * Font Awesome class
   */
  @Input() icon = 'fas fa-star';

  /**
   * Readonly
   */
  @Input() readonly = false;

  /**
   * Shadow star
   */
  @Input() shadow = true;

  /**
   * Color active
   *
   * @type {(ColorTheme | Colors)}
   */
  @Input() colorActive: ColorTheme | Colors = 'warning';

  /**
   * Colors active
   *
   * @type {(Array<ColorTheme | Colors>)}
   */
  @Input() colorsActive: (ColorTheme | Colors)[];

  /**
   * Color inactive
   *
   * @type {(ColorTheme | Colors | GrayColors)}
   */
  @Input() colorInactive: ColorTheme | Colors | GrayColors = 'gray-200';

  /**
   * Rate Change
   */
  @Output() rateChange = new EventEmitter<number>();

  private _rateOld: number;

  stars: number[];

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges) {
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
  colorStar(item: number) {
    if (!this.readonly) {
      this.rate = item;
    }
  }

  /**
   * Selected color click
   *
   * @param {number} item
   */
  selected(item: number) {
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
  colorItem(item: number) {
    if (this.colorsActive) {
      return item <= this.rate ? this.colorsActive[item - 1] : this.colorInactive;
    }
    return item <= this.rate ? this.colorActive : this.colorInactive;
  }
}
