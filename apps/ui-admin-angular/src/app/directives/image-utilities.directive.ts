import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { Colors, ColorTheme, GrayColors } from '@services/model';

@Directive({
  selector: '[fzImageUtilities]',
})
export class ImageUtilitiesDirective {
  /**
   * Crop and center image
   */
  @Input() crop = false;

  /**
   * Img circle
   */
  @Input() circle = false;

  /**
   * Width and height
   *
   * @type {number}
   */
  @Input() widthHeight: number;

  /**
   * Width img
   *
   * @type {string}
   */
  @Input() widthIU: string;

  /**
   * Height img
   *
   * @type {string}
   */
  @Input() heightIU: string;

  /**
   * Shadow
   */
  @Input() shadow = true;

  /**
   * Active border
   */
  @Input() active = false;

  /**
   * Border
   */
  @Input() border = false;

  /**
   * Color active border active
   *
   * @type {(Colors | ColorTheme)}
   */
  @Input() colorActive: Colors | ColorTheme | GrayColors;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes) {
    this.init();
  }

  /**
   * Set class
   */
  init() {
    // clear class
    this.default();

    // add class
    if (this.crop) {
      this.renderer.addClass(this.el.nativeElement, 'img-crop');
    }
    if (this.circle) {
      this.renderer.addClass(this.el.nativeElement, 'img-circle');
    }
    if (this.shadow) {
      this.renderer.addClass(this.el.nativeElement, 'img-shadow');
    }

    if (this.border && this.circle) {
      this.renderer.addClass(this.el.nativeElement, 'img-circle-border');
    }
    if (this.border && !this.circle) {
      this.renderer.addClass(this.el.nativeElement, 'img-border');
    }

    if (this.active && this.circle) {
      this.renderer.addClass(this.el.nativeElement, 'img-circle-active');
    }
    if (this.active && !this.circle) {
      this.renderer.addClass(this.el.nativeElement, 'img-active');
    }

    if (this.colorActive) {
      this.el.nativeElement.style.setProperty('--color-img-active', `var(--${this.colorActive})`);
    }

    if (this.widthHeight) {
      this.renderer.setStyle(this.el.nativeElement, 'width', this.widthHeight + 'px');
      this.renderer.setStyle(this.el.nativeElement, 'height', this.widthHeight + 'px');
    }

    if (this.widthIU) {
      this.renderer.setStyle(this.el.nativeElement, 'width', this.widthIU);
    }
    if (this.heightIU) {
      this.renderer.setStyle(this.el.nativeElement, 'height', this.heightIU);
    }
  }

  /**
   * Remove all class
   */
  default() {
    this.renderer.removeClass(this.el.nativeElement, 'img-crop');
    this.renderer.removeClass(this.el.nativeElement, 'img-circle');
    this.renderer.removeClass(this.el.nativeElement, 'img-shadow');
    this.renderer.removeClass(this.el.nativeElement, 'img-circle-border');
    this.renderer.removeClass(this.el.nativeElement, 'img-border');
    this.renderer.removeClass(this.el.nativeElement, 'img-circle-active');
    this.renderer.removeClass(this.el.nativeElement, 'img-active');
  }
}
