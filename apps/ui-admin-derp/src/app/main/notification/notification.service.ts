import { Injectable, EventEmitter } from '@angular/core';
import { Colors, ColorTheme } from '@services/model';
import { Router } from '@angular/router';

export type positions = 'left-top' | 'left-bottom' | 'center-top' | 'center-bottom' | 'right-top' | 'right-bottom';

export const POSITIONS = ['left-top', 'left-bottom', 'center-top', 'center-bottom', 'right-top', 'right-bottom'];

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  position: positions;

  color: Colors | ColorTheme;

  message: string;

  title: string;

  animated: string;

  imgTitle: string;

  status: boolean;

  statusClose: boolean;

  duration: boolean;

  link: string;

  routerLink: any[];

  icon: string;

  stateProgress: boolean;

  notificationEvent = new EventEmitter();

  progressClose = 0;

  private closeSettime: any;

  private closeSetint: any;

  constructor(public router: Router) {}

  /*
   * Set options notifications and show
   *
   * @param {*} value
   * @memberof NotificationService
   */
  notification(value: any) {
    const {
      duration,
      title,
      message,
      color,
      position,
      animate,
      statusClose,
      imgTitle,
      icon,
      link,
      routerLink,
      stateProgress,
    } = value;

    this.title = title ? title : '';
    this.message = message;
    this.color = color ? color : 'primary';
    this.position = position ? position : 'right-top';
    this.animated = animate ? animate : 'bounceIn';
    this.statusClose = statusClose ?? true;
    this.stateProgress = stateProgress ?? true;
    this.imgTitle = imgTitle ? imgTitle : '';
    this.icon = icon;
    this.link = link;
    this.routerLink = routerLink;
    this.duration = duration;

    this.show(duration);
  }

  /*
   * Show notification and close time
   *
   * @param {number} [duration]
   */
  show(duration?: number) {
    this.defaultCloseTime();
    this.status = true;
    this.notificationEvent.emit(true);
    if (duration) {
      this.closeTime(duration);
    }
  }

  /*
   * Hide notification
   */
  hide() {
    this.status = false;
    this.notificationEvent.emit(false);
    this.defaultCloseTime();
  }

  /*
   * Close time notification
   *
   * @private
   * @param {number} time
   */
  private closeTime(time: number) {
    this.closeSetint = setInterval(() => this.progressClose++, time / 100);
    this.closeSettime = setTimeout(() => this.hide(), time);
  }

  /*
   * Default close time
   */
  private defaultCloseTime() {
    if (this.status) {
      this.status = false;
      this.status = true;
    }
    clearTimeout(this.closeSettime);
    clearInterval(this.closeSetint);
    this.progressClose = 0;
  }

  /*
   * Redirect page
   */
  redirect() {
    if (this.routerLink) {
      this.router.navigate(this.routerLink);
      this.hide();
    }
    if (this.link && !this.routerLink) {
      window.location.href = this.link;
    }
  }

  /*
   * Success notification
   */
  success(message, title?: string, overrides?: any) {
    const config = {
      title,
      message,
      icon: 'fas fa-check-circle',
      color: 'success',
      duration: 30000,
    };
    this.notifyWithOverrides(config, overrides);
  }

  /*
   * Error notification
   */
  error(message, title?: string, overrides?: any) {
    const config = {
      title,
      message,
      icon: 'fas fa-exclamation-triangle',
      color: 'danger',
      duration: 30000,
    };
    this.notifyWithOverrides(config, overrides);
  }

  notifyWithOverrides(config, overrides: object) {
    if (overrides) {
      config = { ...overrides, ...config };
    }
    this.notification(config);
  }
}
