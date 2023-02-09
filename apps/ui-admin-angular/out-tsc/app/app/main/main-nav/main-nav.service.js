import { __decorate, __metadata } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from '../main.service';
let MainNavService = class MainNavService {
    constructor(mainService) {
        this.mainService = mainService;
        /**
         * nav item selected emit
         */
        this.navItemSelectedEmit = new EventEmitter();
        /**
         * subitem clear emit
         */
        this.navSubitemClearClassEmit = new EventEmitter();
        /**
         * Multiples nav
         */
        this.nav = 1;
        /**
         * Status nav
         */
        this.statusNav = true;
        /**
         * Cont open nav
         */
        this.contNav = 0;
    }
    /**
     * Select nav
     * Can be used for various nav layouts
     *
     * @param {number} nav
     * @returns
     * @memberof MainNavService
     */
    selectedNav(nav) {
        this.nav = nav;
        return this;
    }
    /**
     * Selected item and subitem nav and scroll position id
     *
     * @param {string} item
     * @param {string} [subitem]
     */
    selectedItem(item, subitem) {
        this.mainService.templateClear = false;
        let name = item;
        name = subitem ? subitem : null;
        let setTime;
        clearTimeout(setTime);
        setTime = setTimeout(() => {
            this.navItemSelectedEmit.emit({ item, subitem });
            this.scroll(name);
        }, 100);
    }
    /**
     * Clear selections actives navs
     */
    clearClassNavSubitem() {
        this.navSubitemClearClassEmit.emit(true);
    }
    /**
     * Function scroll position id nav
     *
     * @param {string} name
     */
    scroll(name) {
        let set;
        let cont = 0;
        clearInterval(set);
        set = setInterval(() => {
            this.positionScroll(name);
            cont++;
            if (cont === 4) {
                clearInterval(set);
            }
        }, 100);
    }
    /**
     * Scroll position id nav
     *
     * @param {string} name
     */
    positionScroll(name) {
        const scrollbar = document.getElementById(name);
        if (scrollbar) {
            scrollbar.scrollIntoView({ block: 'center' });
        }
    }
};
MainNavService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [MainService])
], MainNavService);
export { MainNavService };
//# sourceMappingURL=main-nav.service.js.map