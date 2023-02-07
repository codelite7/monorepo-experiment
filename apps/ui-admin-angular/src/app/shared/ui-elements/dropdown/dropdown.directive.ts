import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fzDropdownItem]',
})
export class DropdownDirective {
  /**
   * Active
   */
  @Input() activeDI = false;

  /**
   * Disabled
   */
  @Input() disabledDI = false;

  /**
   * Divider
   */
  @Input() dividerDI = false;

  /**
   * Header
   */
  @Input() headerDI = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes): void {
    this.init();
  }

  /**
   * Set class
   */
  init() {
    // clear class
    this.clearClass();

    // add class
    this.renderer.addClass(this.el.nativeElement, `dropdown-item`);
    if (this.dividerDI || this.headerDI) {
      this.renderer.removeClass(this.el.nativeElement, `dropdown-item`);
    }
    if (this.activeDI) {
      this.renderer.addClass(this.el.nativeElement, `active`);
    }
    if (this.disabledDI) {
      this.renderer.addClass(this.el.nativeElement, `disabled`);
      this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '-1');
      this.renderer.setAttribute(this.el.nativeElement, 'aria-disabled', 'true');
    }
    if (this.dividerDI) {
      this.renderer.addClass(this.el.nativeElement, `dropdown-divider`);
    }
    if (this.headerDI) {
      this.renderer.addClass(this.el.nativeElement, `dropdown-header`);
    }
  }

  /**
   * Clear class
   */
  clearClass() {
    this.renderer.removeClass(this.el.nativeElement, `dropdown-item`);
    this.renderer.removeClass(this.el.nativeElement, `dropdown-divider`);
    this.renderer.removeClass(this.el.nativeElement, `dropdown-header`);
  }
}
