import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from '../main.service';

@Injectable({
  providedIn: 'root',
})
export class MainNavService {
  /**
   * nav item selected emit
   */
  navItemSelectedEmit = new EventEmitter();

  /**
   * subitem clear emit
   */
  navSubitemClearClassEmit = new EventEmitter();

  /**
   * Multiples nav
   */
  nav = 1;

  /**
   * Id select nav
   *
   * @type {string}
   */
  idSelectNav: string;

  /**
   * Status nav
   */
  statusNav = true;

  /**
   * Cont open nav
   */
  contNav = 0;

  constructor(private mainService: MainService) {}

  /**
   * Select nav
   * Can be used for various nav layouts
   *
   * @param {number} nav
   * @returns
   * @memberof MainNavService
   */
  selectedNav(nav: number) {
    this.nav = nav;
    return this;
  }

  /**
   * Selected item and subitem nav and scroll position id
   *
   * @param {string} item
   * @param {string} [subitem]
   */
  selectedItem(item: string, subitem?: string) {
    this.mainService.templateClear = false;
    let name = item;
    name = subitem ? subitem : '';

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
  scroll(name: string) {
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
  positionScroll(name: string) {
    const scrollbar = document.getElementById(name);
    if (scrollbar) {
      scrollbar.scrollIntoView({ block: 'center' });
    }
  }
}
