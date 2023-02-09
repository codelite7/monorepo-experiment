import { __decorate, __metadata } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
let MainService = class MainService {
    constructor() {
        /**
         * Nav lateral state
         */
        this.navState = true;
        /**
         * Template clear nav header false
         */
        this.templateClear = true;
        /**
         * Responsive < 800 width
         */
        this.responsive = false;
        /**
         * Reponsive tiny
         */
        this.responsiveTiny = false;
        /**
         * Web support
         */
        this.webpSupport = false;
        /**
         * Resize window emit
         */
        this.resizeWindowEmit = new EventEmitter();
        /**
         * Modal settings emit
         */
        this.modalSettingsEmit = new EventEmitter();
        /**
         * Dark mode emit
         */
        this.darkModeEmit = new EventEmitter();
        /**
         * setting emit
         */
        this.settingsEmit = new EventEmitter();
        this.changeNavStateInit();
    }
    // ===========================================================
    // GENERIC
    // ===========================================================
    /**
     * Show and hide nav lateral
     */
    colapseNav() {
        this.navState = !this.navState;
        if (this.getNavStateBackdrop() && this.navState) {
            document.body.classList.add('modal-open');
        }
        else {
            document.body.classList.remove('modal-open');
        }
    }
    /**
     * Hide nav lateral backdrop true
     */
    navClickHideBackdrop() {
        if (this.getNavStateBackdrop()) {
            this.colapseNav();
        }
    }
    /**
     * Open modal settings
     */
    openModalSettings() {
        this.modalSettingsEmit.emit(true);
    }
    /**
     * Control margins nav lateral
     *
     * @readonly
     */
    get boxContainerMargin() {
        if (!this.getFullBox() || this.getNavStateBackdrop()) {
            return '';
        }
        if (this.getNavPosition() === 'left') {
            const margin = 'animate-margin-left';
            if (this.navState) {
                return `${margin} margin-left-show`;
            }
            else {
                return `${margin} margin-left-hide`;
            }
        }
        if (this.getNavPosition() === 'right') {
            const margin = 'animate-margin-right';
            if (this.navState) {
                return `${margin} margin-right-show`;
            }
            else {
                return `${margin} margin-right-hide`;
            }
        }
        return '';
    }
    /**
     * Add class no-gutters width
     *
     * @readonly
     */
    noGuttersClass(width) {
        return this.widthWindow < width ? 'no-gutters' : '';
    }
    /**
     * Convert string bool
     *
     * @param {*} value
     * @returns
     */
    convertBool(value) {
        // this is sometimes null, not undefined, and its not worth digging through the template we bought to fix so we can use ===
        // tslint:disable-next-line:triple-equals
        if (value == undefined) {
            return;
        }
        return value === 'false' ? false : true;
    }
    /**
     * Full window by id
     *
     * @param {string} id
     */
    fullScreenWindowId(id) {
        const elem = document.getElementById(id);
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            /* Firefox */
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }
    // GET E SETTER localStorage
    setSetting(setting, value) {
        localStorage.setItem(setting, value);
    }
    getSetting(setting) {
        return localStorage.getItem(setting);
    }
    // ===========================================================
    // NAVBAR SETTINGS
    // ===========================================================
    // GET E SETTER navStateInit
    setNavStateInit(state) {
        if (state && !this.getFullBox()) {
            return;
        }
        this.setSetting('navStateInit', state);
    }
    getNavStateInit() {
        var _a;
        return (_a = this.convertBool(this.getSetting('navStateInit'))) !== null && _a !== void 0 ? _a : true;
    }
    changeNavStateInit() {
        if (!this.getNavStateInit() || this.getNavStateBackdrop()) {
            this.navState = false;
        }
    }
    // GET E SETTER navPosition
    setNavPosition(position) {
        this.navState = true;
        this.setSetting('navPosition', position);
    }
    getNavPosition() {
        var _a;
        return (_a = this.getSetting('navPosition')) !== null && _a !== void 0 ? _a : 'left';
    }
    // GET E SETTER navStateBackdrop
    setNavStateBackdrop(state) {
        this.setSetting('navStateBackdrop', state);
    }
    getNavStateBackdrop() {
        var _a;
        if (!this.getFullBox()) {
            return true;
        }
        if (this.responsive) {
            return true;
        }
        return (_a = this.convertBool(this.getSetting('navStateBackdrop'))) !== null && _a !== void 0 ? _a : false;
    }
    // GET E SETTER navBackgroundImageState
    setNavBackgroundImageState(state) {
        this.setSetting('navBackgroundImageState', state);
    }
    getNavBackgroundImageState() {
        var _a;
        return (_a = this.convertBool(this.getSetting('navBackgroundImageState'))) !== null && _a !== void 0 ? _a : false;
    }
    // GET E SETTER navBackgroundImage
    setNavBackgroundImage(name) {
        this.setSetting('navBackgroundImage', name);
    }
    getNavBackgroundImage() {
        var _a;
        return (_a = this.getSetting('navBackgroundImage')) !== null && _a !== void 0 ? _a : 'nav1';
    }
    // GET E SETTER navTheme
    setNavTheme(name) {
        this.setSetting('navTheme', name);
    }
    getNavTheme() {
        var _a;
        return (_a = this.getSetting('navTheme')) !== null && _a !== void 0 ? _a : 'dark';
    }
    // ===========================================================
    // HEADER SETTINGS
    // ===========================================================
    // GET E SETTER headerTheme
    setHeaderTheme(name) {
        this.setSetting('headerTheme', name);
    }
    getHeaderTheme() {
        var _a;
        return (_a = this.getSetting('headerTheme')) !== null && _a !== void 0 ? _a : 'gray-dark';
    }
    // GET E SETTER headerFixed
    setHeaderFixed(state) {
        this.setSetting('headerFixed', state);
    }
    getHeaderFixed() {
        var _a;
        return (_a = this.convertBool(this.getSetting('headerFixed'))) !== null && _a !== void 0 ? _a : true;
    }
    // GET E SETTER headerOptSearch
    setHeaderOptSearch(state) {
        this.setSetting('headerOptSearch', state);
    }
    getHeaderOptSearch() {
        var _a;
        return (_a = this.convertBool(this.getSetting('headerOptSearch'))) !== null && _a !== void 0 ? _a : false;
    }
    // GET E SETTER headerOptChat
    setHeaderOptChat(state) {
        this.setSetting('headerOptChat', state);
    }
    getHeaderOptChat() {
        var _a;
        return (_a = this.convertBool(this.getSetting('headerOptChat'))) !== null && _a !== void 0 ? _a : false;
    }
    // GET E SETTER headerOptNotification
    setHeaderOptNotification(state) {
        this.setSetting('headerOptNotification', state);
    }
    getHeaderOptNotification() {
        var _a;
        return (_a = this.convertBool(this.getSetting('headerOptNotification'))) !== null && _a !== void 0 ? _a : true;
    }
    // GET E SETTER headerOptEmail
    setHeaderOptEmail(state) {
        this.setSetting('headerOptEmail', state);
    }
    getHeaderOptEmail() {
        var _a;
        return (_a = this.convertBool(this.getSetting('headerOptEmail'))) !== null && _a !== void 0 ? _a : false;
    }
    // GET E SETTER headerOptTask
    setHeaderOptTask(state) {
        this.setSetting('headerOptTask', state);
    }
    getHeaderOptTask() {
        var _a;
        return (_a = this.convertBool(this.getSetting('headerOptTask'))) !== null && _a !== void 0 ? _a : false;
    }
    // ===========================================================
    // OTHERS
    // ===========================================================
    // GET E SETTER darkTheme
    setDarkTheme(state) {
        this.darkModeEmit.emit(state);
        this.setSetting('darkTheme', state);
    }
    getDarkTheme() {
        var _a;
        return (_a = this.convertBool(this.getSetting('darkTheme'))) !== null && _a !== void 0 ? _a : false;
    }
    // GET E SETTER fullBox
    setFullBox(state) {
        if (!state) {
            this.setNavStateInit(false);
            this.navState = false;
        }
        else {
            this.setNavStateInit(true);
            this.navState = true;
        }
        this.setSetting('fullBox', state);
    }
    getFullBox() {
        var _a;
        return (_a = this.convertBool(this.getSetting('fullBox'))) !== null && _a !== void 0 ? _a : true;
    }
};
MainService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [])
], MainService);
export { MainService };
//# sourceMappingURL=main.service.js.map