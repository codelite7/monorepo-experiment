import { __decorate, __metadata } from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
export const POSITIONS = ['left-top', 'left-bottom', 'center-top', 'center-bottom', 'right-top', 'right-bottom'];
let NotificationService = class NotificationService {
    constructor(router) {
        this.router = router;
        this.notificationEvent = new EventEmitter();
        this.progressClose = 0;
    }
    /*
     * Set options notifications and show
     *
     * @param {*} value
     * @memberof NotificationService
     */
    notification(value) {
        const { duration, title, message, color, position, animate, statusClose, imgTitle, icon, link, routerLink, stateProgress, } = value;
        this.title = title ? title : '';
        this.message = message;
        this.color = color ? color : 'primary';
        this.position = position ? position : 'right-top';
        this.animated = animate ? animate : 'bounceIn';
        this.statusClose = statusClose !== null && statusClose !== void 0 ? statusClose : true;
        this.stateProgress = stateProgress !== null && stateProgress !== void 0 ? stateProgress : true;
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
    show(duration) {
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
    closeTime(time) {
        this.closeSetint = setInterval(() => this.progressClose++, time / 100);
        this.closeSettime = setTimeout(() => this.hide(), time);
    }
    /*
     * Default close time
     */
    defaultCloseTime() {
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
    success(message, title, overrides) {
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
    error(message, title, overrides) {
        const config = {
            title,
            message,
            icon: 'fas fa-exclamation-triangle',
            color: 'danger',
            duration: 30000,
        };
        this.notifyWithOverrides(config, overrides);
    }
    notifyWithOverrides(config, overrides) {
        if (overrides) {
            config = Object.assign(Object.assign({}, overrides), config);
        }
        this.notification(config);
    }
};
NotificationService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [Router])
], NotificationService);
export { NotificationService };
//# sourceMappingURL=notification.service.js.map