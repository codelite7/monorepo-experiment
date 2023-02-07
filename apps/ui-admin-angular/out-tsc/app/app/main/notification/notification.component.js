import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { NotificationService } from './notification.service';
import { FadeAnimation } from 'src/app/animation';
let NotificationComponent = class NotificationComponent {
    constructor(notificationService, cd) {
        this.notificationService = notificationService;
        this.cd = cd;
    }
    onResize(event) {
        this.widthNotification();
    }
    ngOnInit() {
        this.notificationService.notificationEvent.subscribe((res) => this.widthNotification());
    }
    widthNotification() {
        if (this.notificationService.status) {
            this.cd.detectChanges();
            if (this.notificationEl && this.notificationEl.nativeElement) {
                this.notificationEl.nativeElement.style.setProperty('--width-notification', `${this.notificationEl.nativeElement.clientWidth}px`);
            }
        }
    }
};
__decorate([
    ViewChild('notification'),
    __metadata("design:type", ElementRef)
], NotificationComponent.prototype, "notificationEl", void 0);
__decorate([
    HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationComponent.prototype, "onResize", null);
NotificationComponent = __decorate([
    Component({
        selector: 'fz-notification',
        templateUrl: './notification.component.html',
        styleUrls: ['./notification.component.scss'],
        animations: [FadeAnimation()],
    }),
    __metadata("design:paramtypes", [NotificationService, ChangeDetectorRef])
], NotificationComponent);
export { NotificationComponent };
//# sourceMappingURL=notification.component.js.map