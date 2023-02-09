import { Directive, ElementRef, Renderer2, Input, HostListener, Output, EventEmitter } from '@angular/core';
import tippy from 'tippy.js';
import { MainService } from '@main/main.service';

export type TipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'auto'
  | 'auto-start'
  | 'auto-end';

export type TipFollowCursor = boolean | 'horizontal' | 'vertical' | 'initial';

@Directive({
  selector: '[fzTip]',
})
export class TipDirective {
  constructor(public mainService: MainService, private el: ElementRef, private renderer: Renderer2) {}

  /**
   * content  tippy.js
   *
   * @type {string}
   */
  @Input() content: string;

  /**
   * placement  tippy.js
   *
   * @type {TipPlacement}
   */
  @Input() placement: TipPlacement;

  /**
   * trigger  tippy.js
   *
   * @type {string}
   */
  @Input() trigger: string;

  /**
   * allowHTML  tippy.js
   */
  @Input() allowHTML = false;

  /**
   * animation  tippy.js
   *
   * @type {string}
   */
  @Input() animation: string;

  /**
   * arrow  tippy.js
   *
   * @type {(string | boolean)}
   */
  @Input() arrow: string | boolean = true;

  /**
   * delay  tippy.js
   *
   * @type {(number | Array<any>)}
   */
  @Input() delay: number | any[];

  /**
   * Duration  tippy.js
   *
   * @type {(number | Array<any>)}
   */
  @Input() duration: number | any[];

  /**
   * FollowCursor  tippy.js
   *
   * @type {TipFollowCursor}
   */
  @Input() followCursor: TipFollowCursor;

  /**
   * HideOnClick  tippy.js
   *
   * @type {(boolean | 'toggle')}
   */
  @Input() hideOnClick: boolean | 'toggle' = true;

  /**
   * interactiveDebounce  tippy.js
   *
   * @type {number}
   */
  @Input() interactiveDebounce: number;

  /**
   * maxWidth  tippy.js
   *
   * @type {(number | 'none')}
   */
  @Input() maxWidth: number | 'none';

  /**
   * moveTransition  tippy.js
   *
   * @type {string}
   */
  @Input() moveTransition: string;

  /**
   * offset  tippy.js
   *
   * @type {Array<number>}
   */
  @Input() offset: number[];

  /**
   * touch  tippy.js
   *
   * @type {(boolean | string | Array<any>)}
   */
  @Input() touch: boolean | string | any[] = true;

  /**
   * zIndex  tippy.js
   *
   * @type {number}
   */
  @Input() zIndex: number;

  /**
   * theme tippy.js
   */
  @Input() theme = 'tippy-theme';

  /**
   * role  tippy.js
   *
   * @type {string}
   */
  @Input() role: string;

  /**
   * interactiveBorder tippy.js
   *
   * @type {number}
   */
  @Input() interactiveBorder: number;

  /**
   * interactive tip tippy.js
   *
   * @type {boolean}
   */
  @Input() interactive: boolean;

  /**
   * inertia tippy.js
   *
   * @type {boolean}
   */
  @Input() inertia: boolean;

  /**
   * aria tippy.js
   *
   * @type {object}
   */
  @Input() aria: object;

  /**
   * appendTo tippy.js
   *
   * @type {*}
   */
  @Input() appendTo: any;

  /**
   * Initial tip
   *
   * @type {boolean}
   */
  @Input() initialState: boolean;

  /**
   * Hide click outside
   */
  @Input() closeClickOutside = true;

  /**
   * State tip
   *
   * @type {boolean}
   */
  @Input() state: boolean;

  /**
   * State tip
   */
  @Output() stateOn = new EventEmitter();

  private option: any = {};

  private instance: any;

  private darkModeEmit: any;

  /**
   * Listener keyup esc hide tip
   */
  @HostListener('keyup.esc') onEsc() {
    this.hide();
  }

  /**
   * Listen keyup enter show tip
   */
  @HostListener('keyup.enter') onOpen() {
    this.show();
  }

  ngOnInit() {
    this.init();
    this.darkModeEmit = this.mainService.darkModeEmit.subscribe((res) =>
      res ? this.defineColor('white') : this.defineColor('black')
    );
    this.mainService.getDarkTheme() ? this.defineColor('white') : this.defineColor('black');
  }

  ngOnChanges(changes) {
    if (changes.content && !changes.content.firstChange) {
      this.instance.setContent(changes.content.currentValue);
    }
    if (changes.initialState && !changes.initialState.firstChange) {
      changes.initialState.currentValue === 'true' || changes.initialState.currentValue === true
        ? this.show()
        : this.hide();
    }
    if (this.state === true || this.state === false) {
      this.state ? this.show() : this.hide();
    }
  }

  ngOnDestroy(): void {
    this.darkModeEmit.unsubscribe();
  }

  /**
   * Init tippy.js options
   */
  init() {
    if (this.content) {
      this.option.content = this.content;
    }
    if (this.placement) {
      this.option.placement = this.placement;
    }
    if (this.trigger) {
      this.option.trigger = this.trigger;
    }
    if (this.allowHTML) {
      this.option.allowHTML = true;
    }
    if (this.animation) {
      this.option.animation = this.animation;
    }
    if (this.delay) {
      this.option.delay = this.delay;
    }
    if (this.duration) {
      this.option.duration = this.duration;
    }
    if (this.followCursor) {
      this.option.followCursor = this.followCursor;
    }
    if (this.interactiveDebounce) {
      this.option.interactiveDebounce = this.interactiveDebounce;
    }
    if (this.maxWidth) {
      this.option.maxWidth = this.maxWidth;
    }
    if (this.moveTransition) {
      this.option.moveTransition = this.moveTransition;
    }
    if (this.offset) {
      this.option.offset = this.offset;
    }
    if (this.zIndex) {
      this.option.zIndex = this.zIndex;
    }
    if (this.theme) {
      this.option.theme = this.theme;
    }
    if (this.role) {
      this.option.role = this.role;
    }
    if (this.interactiveBorder) {
      this.option.interactiveBorder = this.interactiveBorder;
    }
    if (this.interactive) {
      this.option.interactive = this.interactive;
    }
    if (this.inertia) {
      this.option.inertia = this.inertia;
    }
    if (this.aria) {
      this.option.aria = this.aria;
    }
    if (this.appendTo) {
      this.option.appendTo = this.appendTo;
    }

    this.option.arrow = this.arrow;
    this.option.hideOnClick = this.hideOnClick;
    this.option.touch = this.touch;

    const self = this;
    this.instance = tippy(this.el.nativeElement, {
      ...this.option,
      onClickOutside(instance, event) {
        self.clickOutside();
      },
      onShow(instance) {
        self.stateOn.emit(true);
      },
      onHide(instance) {
        self.stateOn.emit(false);
      },
    });

    if (this.initialState) {
      this.show();
    }
  }

  /**
   * Set content instance
   *
   * @param {*} content
   */
  setContent(content) {
    this.instance.setContent(content);
  }

  /**
   * Show tip
   */
  show() {
    this.instance?.show();
    this.stateOn.emit(true);
  }

  /**
   * Hide tip
   */
  hide() {
    this.instance?.hide();
    this.stateOn.emit(false);
  }

  /**
   * Hide outside click
   *
   * @memberof TipDirective
   */
  clickOutside() {
    if (this.closeClickOutside) {
      this.hide();
    }
  }

  /**
   * Define color theme
   *
   * @param {*} color
   * @returns
   */
  defineColor(color) {
    if (this.theme !== 'tippy-theme') {
      return;
    }
    const doc = document.documentElement;
    doc.style.setProperty('--tippy-t-arrow-color', `var(--${color})`);
    doc.style.setProperty('--tippy-t-color', `var(--${color})`);

    color = color === 'white' ? 'gray-800' : 'white';
    doc.style.setProperty('--tippy-t-color-text', `var(--${color})`);
  }
}
