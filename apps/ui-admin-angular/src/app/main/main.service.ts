import { Injectable, EventEmitter } from '@angular/core';
import { Colors } from '@services/model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  /**
   * Nav lateral state
   */
  navState = true;

  /**
   * Template clear nav header false
   */
  templateClear = true;

  /**
   * Responsive < 800 width
   */
  responsive = false;

  /**
   * Reponsive tiny
   */
  responsiveTiny = false;

  /**
   * Width window
   *
   * @type {number}
   */
  widthWindow: number;

  /**
   * Height window
   *
   * @type {number}
   */
  heightwindow: number;

  /**
   * Web support
   */
  webpSupport = false;

  /**
   * Resize window emit
   */
  resizeWindowEmit = new EventEmitter();

  /**
   * Modal settings emit
   */
  modalSettingsEmit = new EventEmitter();

  /**
   * Dark mode emit
   */
  darkModeEmit = new EventEmitter();

  /**
   * setting emit
   */
  settingsEmit = new EventEmitter();

  constructor() {
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
    } else {
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
      } else {
        return `${margin} margin-left-hide`;
      }
    }
    if (this.getNavPosition() === 'right') {
      const margin = 'animate-margin-right';
      if (this.navState) {
        return `${margin} margin-right-show`;
      } else {
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
  noGuttersClass(width: number) {
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
  fullScreenWindowId(id: string) {
    const elem: any = document.getElementById(id);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  // GET E SETTER localStorage

  private setSetting(setting: string, value: any) {
    localStorage.setItem(setting, value);
  }

  private getSetting(setting: string) {
    return localStorage.getItem(setting);
  }

  // ===========================================================
  // NAVBAR SETTINGS
  // ===========================================================

  // GET E SETTER navStateInit

  setNavStateInit(state: boolean) {
    if (state && !this.getFullBox()) {
      return;
    }
    this.setSetting('navStateInit', state);
  }

  getNavStateInit() {
    return this.convertBool(this.getSetting('navStateInit')) ?? true;
  }

  changeNavStateInit() {
    if (!this.getNavStateInit() || this.getNavStateBackdrop()) {
      this.navState = false;
    }
  }

  // GET E SETTER navPosition

  setNavPosition(position: 'left' | 'right') {
    this.navState = true;
    this.setSetting('navPosition', position);
  }

  getNavPosition() {
    return this.getSetting('navPosition') ?? 'left';
  }

  // GET E SETTER navStateBackdrop

  setNavStateBackdrop(state: boolean) {
    this.setSetting('navStateBackdrop', state);
  }

  getNavStateBackdrop() {
    if (!this.getFullBox()) {
      return true;
    }
    if (this.responsive) {
      return true;
    }
    return this.convertBool(this.getSetting('navStateBackdrop')) ?? false;
  }

  // GET E SETTER navBackgroundImageState

  setNavBackgroundImageState(state: boolean) {
    this.setSetting('navBackgroundImageState', state);
  }

  getNavBackgroundImageState() {
    return this.convertBool(this.getSetting('navBackgroundImageState')) ?? false;
  }

  // GET E SETTER navBackgroundImage

  setNavBackgroundImage(name: string) {
    this.setSetting('navBackgroundImage', name);
  }

  getNavBackgroundImage() {
    return this.getSetting('navBackgroundImage') ?? 'nav1';
  }

  // GET E SETTER navTheme

  setNavTheme(name: 'dark' | 'light') {
    this.setSetting('navTheme', name);
  }

  getNavTheme() {
    return this.getSetting('navTheme') ?? 'dark';
  }

  // ===========================================================
  // HEADER SETTINGS
  // ===========================================================

  // GET E SETTER headerTheme

  setHeaderTheme(name: Colors) {
    this.setSetting('headerTheme', name);
  }

  getHeaderTheme() {
    return this.getSetting('headerTheme') ?? 'gray-dark';
  }

  // GET E SETTER headerFixed

  setHeaderFixed(state: boolean) {
    this.setSetting('headerFixed', state);
  }

  getHeaderFixed() {
    return this.convertBool(this.getSetting('headerFixed')) ?? true;
  }

  // GET E SETTER headerOptSearch

  setHeaderOptSearch(state: boolean) {
    this.setSetting('headerOptSearch', state);
  }

  getHeaderOptSearch() {
    return this.convertBool(this.getSetting('headerOptSearch')) ?? false;
  }

  // GET E SETTER headerOptChat

  setHeaderOptChat(state: boolean) {
    this.setSetting('headerOptChat', state);
  }

  getHeaderOptChat() {
    return this.convertBool(this.getSetting('headerOptChat')) ?? false;
  }

  // GET E SETTER headerOptNotification

  setHeaderOptNotification(state: boolean) {
    this.setSetting('headerOptNotification', state);
  }

  getHeaderOptNotification() {
    return this.convertBool(this.getSetting('headerOptNotification')) ?? true;
  }

  // GET E SETTER headerOptEmail

  setHeaderOptEmail(state: boolean) {
    this.setSetting('headerOptEmail', state);
  }

  getHeaderOptEmail() {
    return this.convertBool(this.getSetting('headerOptEmail')) ?? false;
  }

  // GET E SETTER headerOptTask

  setHeaderOptTask(state: boolean) {
    this.setSetting('headerOptTask', state);
  }

  getHeaderOptTask() {
    return this.convertBool(this.getSetting('headerOptTask')) ?? false;
  }

  // ===========================================================
  // OTHERS
  // ===========================================================

  // GET E SETTER darkTheme

  setDarkTheme(state: boolean) {
    this.darkModeEmit.emit(state);
    this.setSetting('darkTheme', state);
  }

  getDarkTheme() {
    return this.convertBool(this.getSetting('darkTheme')) ?? false;
  }

  // GET E SETTER fullBox

  setFullBox(state: boolean) {
    if (!state) {
      this.setNavStateInit(false);
      this.navState = false;
    } else {
      this.setNavStateInit(true);
      this.navState = true;
    }
    this.setSetting('fullBox', state);
  }

  getFullBox() {
    return this.convertBool(this.getSetting('fullBox')) ?? true;
  }
}
