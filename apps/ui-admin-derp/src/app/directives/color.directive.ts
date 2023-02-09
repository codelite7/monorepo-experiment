import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { Colors, ColorTheme, COLORS, COLORTHEMES, GrayColors } from '@services/model';
import { ColorConfigService } from '@services/color-config.service';

@Directive({
  selector: '[fzColor]',
})
export class ColorDirective {
  /**
   * Text color
   *
   * @type {(Colors | ColorTheme | GrayColors)}
   */
  @Input() textColor: Colors | ColorTheme | GrayColors;

  /**
   * Background color
   *
   * @type {(Colors | ColorTheme | GrayColors)}
   */
  @Input() backgroundColor: Colors | ColorTheme | GrayColors;

  /**
   * Background and color contrast
   *
   * @type {(Colors | ColorTheme | GrayColors)}
   */
  @Input() backgroundTextColor: Colors | ColorTheme | GrayColors;

  /**
   * Color contrast backgroundTextColor
   *
   * @type {(Colors | ColorTheme | GrayColors)}
   */
  @Input() colorContrast: Colors | ColorTheme | GrayColors = 'white';

  constructor(private el: ElementRef, private renderer: Renderer2, private colorConfigService: ColorConfigService) {}

  ngOnInit(): void {
    this.addClass();
  }

  ngOnChanges(changes) {
    this.addClass();
  }

  /**
   * Set class
   */
  addClass() {
    if (this.textColor) {
      this.renderer.setStyle(this.el.nativeElement, 'color', `var(--${this.textColor})`);
    }
    if (this.backgroundColor) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', `var(--${this.backgroundColor})`);
    }
    if (this.backgroundTextColor && !this.textColor && !this.backgroundColor) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', `var(--${this.backgroundTextColor})`);
      this.renderer.setStyle(
        this.el.nativeElement,
        'color',
        `var(--${this.colorConfigService.isDark(this.backgroundTextColor) ? this.colorContrast : 'gray-800'})`
      );
    }
  }
}
