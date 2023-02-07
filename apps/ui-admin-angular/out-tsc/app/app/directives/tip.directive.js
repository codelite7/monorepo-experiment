import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Renderer2, Input, HostListener, Output, EventEmitter } from '@angular/core';
import tippy from 'tippy.js';
import { MainService } from '@main/main.service';
let TipDirective = class TipDirective {
    constructor(mainService, el, renderer) {
        this.mainService = mainService;
        this.el = el;
        this.renderer = renderer;
        /**
         * allowHTML  tippy.js
         */
        this.allowHTML = false;
        /**
         * arrow  tippy.js
         *
         * @type {(string | boolean)}
         */
        this.arrow = true;
        /**
         * HideOnClick  tippy.js
         *
         * @type {(boolean | 'toggle')}
         */
        this.hideOnClick = true;
        /**
         * touch  tippy.js
         *
         * @type {(boolean | string | Array<any>)}
         */
        this.touch = true;
        /**
         * theme tippy.js
         */
        this.theme = 'tippy-theme';
        /**
         * Hide click outside
         */
        this.closeClickOutside = true;
        /**
         * State tip
         */
        this.stateOn = new EventEmitter();
        this.option = {};
    }
    /**
     * Listener keyup esc hide tip
     */
    onEsc() {
        this.hide();
    }
    /**
     * Listen keyup enter show tip
     */
    onOpen() {
        this.show();
    }
    ngOnInit() {
        this.init();
        this.darkModeEmit = this.mainService.darkModeEmit.subscribe((res) => res ? this.defineColor('white') : this.defineColor('black'));
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
    ngOnDestroy() {
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
        this.instance = tippy(this.el.nativeElement, Object.assign(Object.assign({}, this.option), { onClickOutside(instance, event) {
                self.clickOutside();
            },
            onShow(instance) {
                self.stateOn.emit(true);
            },
            onHide(instance) {
                self.stateOn.emit(false);
            } }));
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
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.show();
        this.stateOn.emit(true);
    }
    /**
     * Hide tip
     */
    hide() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.hide();
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
};
__decorate([
    Input(),
    __metadata("design:type", String)
], TipDirective.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TipDirective.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TipDirective.prototype, "trigger", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "allowHTML", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TipDirective.prototype, "animation", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "arrow", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "delay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "duration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "followCursor", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "hideOnClick", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TipDirective.prototype, "interactiveDebounce", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "maxWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TipDirective.prototype, "moveTransition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TipDirective.prototype, "offset", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "touch", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TipDirective.prototype, "zIndex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "theme", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TipDirective.prototype, "role", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TipDirective.prototype, "interactiveBorder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TipDirective.prototype, "interactive", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TipDirective.prototype, "inertia", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "aria", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "appendTo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TipDirective.prototype, "initialState", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TipDirective.prototype, "closeClickOutside", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TipDirective.prototype, "state", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TipDirective.prototype, "stateOn", void 0);
__decorate([
    HostListener('keyup.esc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipDirective.prototype, "onEsc", null);
__decorate([
    HostListener('keyup.enter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipDirective.prototype, "onOpen", null);
TipDirective = __decorate([
    Directive({
        selector: '[fzTip]',
    }),
    __metadata("design:paramtypes", [MainService, ElementRef, Renderer2])
], TipDirective);
export { TipDirective };
//# sourceMappingURL=tip.directive.js.map