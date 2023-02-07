import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { ColorTheme } from '@services/model';

@Directive({
  selector: '[fzListGroupItem]',
})
export class ListGroupDirective {
  /**
   * Active
   */
  @Input() activeLGI = false;

  /**
   * Action
   */
  @Input() actionLGI = false;

  /**
   * Disabled
   */
  @Input() disabledLGI = false;

  /**
   * Color
   *
   * @type {ColorTheme}
   */
  @Input() colorLGI: ColorTheme;

  /**
   * Area Class
   *
   * @type {Array<string>}
   */
  @Input() classLGI: string[];

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

    if (changes?.colorLGI?.previousValue) {
      this.renderer.removeClass(this.el.nativeElement, `list-group-item-${changes.colorLGI.previousValue}`);
    }

    if (this.colorLGI) {
      color = `list-group-item-${this.colorLGI}`;
    }

    // clear class
    this.default(color);

    // add class
    this.renderer.addClass(this.el.nativeElement, 'list-group-item');
    if (this.activeLGI) {
      this.renderer.addClass(this.el.nativeElement, 'active');
    }
    if (this.actionLGI) {
      this.renderer.addClass(this.el.nativeElement, 'list-group-item-action');
    }
    if (this.disabledLGI) {
      this.renderer.addClass(this.el.nativeElement, 'disabled');
      this.renderer.setAttribute(this.el.nativeElement, 'aria-disabled', 'true');
    }
    if (this.colorLGI) {
      this.renderer.addClass(this.el.nativeElement, color);
    }
  }

  /**
   * Clear class
   *
   * @param {string} color
   */
  default(color: string) {
    this.renderer.removeClass(this.el.nativeElement, color);
    this.renderer.removeClass(this.el.nativeElement, 'list-group-item');
    this.renderer.removeClass(this.el.nativeElement, 'active');
    this.renderer.removeClass(this.el.nativeElement, 'list-group-item-action');
    this.renderer.removeClass(this.el.nativeElement, 'disabled');
    this.renderer.removeAttribute(this.el.nativeElement, 'aria-disabled');
  }
}
