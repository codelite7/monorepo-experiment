import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { Colors, ColorTheme, GrayColors } from '@services/model';

@Directive({
  selector: '[fzProgressItem]',
})
export class ProgressDirective {
  @Input() sizePI: number;

  @Input() colorPI: Colors | ColorTheme | GrayColors;

  @Input() stripedPI = false;

  @Input() animatedPI = false;

  @Input() classPI: string[];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes) {
    this.init(changes);
  }

  /**
   * Set class
   */
  init(changes?) {
    let color;

    if (changes?.colorPI?.previousValue) {
      this.renderer.removeClass(this.el.nativeElement, `bg-${changes.colorPI.previousValue}`);
    }

    if (this.colorPI) {
      color = `bg-${this.colorPI}`;
    }

    // clear class
    this.default(color);

    // add class
    this.renderer.addClass(this.el.nativeElement, 'progress-bar');
    if (this.sizePI) {
      this.renderer.setStyle(this.el.nativeElement, 'width', `${this.sizePI}%`);
    }
    if (this.colorPI) {
      this.renderer.addClass(this.el.nativeElement, color);
    }
    if (this.stripedPI) {
      this.renderer.addClass(this.el.nativeElement, 'progress-bar-striped');
    }
    if (this.animatedPI) {
      this.renderer.addClass(this.el.nativeElement, 'progress-bar-animated');
    }
  }

  /**
   * Clear class
   *
   * @param {string} color
   */
  default(color: string) {
    this.renderer.removeClass(this.el.nativeElement, color);
    this.renderer.removeClass(this.el.nativeElement, 'progress-bar');
    this.renderer.removeClass(this.el.nativeElement, 'progress-bar-striped');
    this.renderer.removeClass(this.el.nativeElement, 'progress-bar-animated');
  }
}
