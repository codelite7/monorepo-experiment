import { Directive, ElementRef, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[fzFocus]',
})
export class FocusDirective {
  /**
   * Focus state
   */
  @Input() focusState = false;

  /**
   * Focus output
   */
  @Output() onFocus = new EventEmitter();

  constructor(private el: ElementRef, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.focus();
  }

  ngOnChanges(changes) {
    this.focus();
  }

  /**
   * Focus element
   */
  focus() {
    if (this.focusState) {
      let elfocus;
      clearTimeout(elfocus);
      elfocus = setTimeout(() => {
        this.el.nativeElement.focus();
        this.onFocus.emit(false);
      }, 0);
    }
    // this.ref.detectChanges();
  }
}
