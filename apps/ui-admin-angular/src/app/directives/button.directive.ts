import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { ColorTheme, COLORS, COLORTHEMES, Colors } from '@services/model';

@Directive({
  selector: '[fzButton]',
})
export class ButtonDirective {
  /**
   * Button outline
   */
  @Input() outline = false;

  /**
   * Color button
   *
   * @type {ColorTheme}
   */
  @Input() color: ColorTheme | Colors;

  /**
   * Button link
   */
  @Input() link = false;

  /**
   * Button active
   */
  @Input() activeB = false;

  /**
   * Center block
   */
  @Input() blockB = false;

  /**
   * Disabled button
   */
  @Input() disabledB = false;

  /**
   * Button rounded
   */
  @Input() rounded = false;

  /**
   * Button circle
   */
  @Input() circle = false;

  /**
   * Btn sm or large
   *
   * @type {('sm' | 'lg')}
   */
  @Input() size: 'sm' | 'lg';

  /**
   * Button large right and left
   */
  @Input() lrLargeB = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes) {
    this.init(changes);
  }

  /**
   * Add class
   */
  init(changes?) {
    let btnColor;
    let btnSize;

    if (changes?.color?.previousValue) {
      const outlineS1 = this.outline ? 'outline-' : '';
      const btnColor1 = `btn-${outlineS1}${changes.color.previousValue}`;
      this.renderer.removeClass(this.el.nativeElement, btnColor1);
    }
    if (changes?.size?.previousValue) {
      this.renderer.removeClass(this.el.nativeElement, `btn-${changes.size.previousValue}`);
    }

    // ---

    if (this.color) {
      const outlineS = this.outline ? 'outline-' : '';
      btnColor = `btn-${outlineS}${this.color}`;
    }
    if (this.size) {
      btnSize = `btn-${this.size}`;
    }

    // clear
    this.clearClass(btnColor, btnSize);

    // add
    this.renderer.addClass(this.el.nativeElement, 'btn');
    if (this.color) {
      this.renderer.addClass(this.el.nativeElement, btnColor);
    }
    if (this.size) {
      this.renderer.addClass(this.el.nativeElement, btnSize);
    }
    if (this.link) {
      this.renderer.addClass(this.el.nativeElement, 'btn-link');
    }
    if (this.activeB) {
      this.renderer.addClass(this.el.nativeElement, 'active');
    }
    if (this.blockB) {
      this.renderer.addClass(this.el.nativeElement, 'btn-block');
    }
    if (this.disabledB) {
      this.renderer.addClass(this.el.nativeElement, 'disabled');
    }
    if (this.rounded) {
      this.renderer.addClass(this.el.nativeElement, 'btn-rounded');
    }
    if (this.circle) {
      this.renderer.addClass(this.el.nativeElement, 'btn-circle');
    }
    if (this.lrLargeB) {
      this.renderer.addClass(this.el.nativeElement, 'btn-lr-large');
    }
  }

  /**
   * Remove all class
   *
   * @param {string} btnColor
   * @param {string} btnSize
   */
  clearClass(btnColor: string, btnSize: string) {
    this.renderer.removeClass(this.el.nativeElement, btnColor);
    this.renderer.removeClass(this.el.nativeElement, btnSize);
    this.renderer.removeClass(this.el.nativeElement, 'btn-link');
    this.renderer.removeClass(this.el.nativeElement, 'active');
    this.renderer.removeClass(this.el.nativeElement, 'btn-block');
    this.renderer.removeClass(this.el.nativeElement, 'disabled');
    this.renderer.removeClass(this.el.nativeElement, 'btn-rounded');
    this.renderer.removeClass(this.el.nativeElement, 'btn-circle');
    this.renderer.removeClass(this.el.nativeElement, 'btn-lr-large');
    this.renderer.removeClass(this.el.nativeElement, 'btn');
  }
}
