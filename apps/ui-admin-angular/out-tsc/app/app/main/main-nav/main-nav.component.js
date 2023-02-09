import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { MainNavService } from './main-nav.service';
import { MainService } from '../main.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NotificationService } from '@main/notification/notification.service';
let MainNavComponent = class MainNavComponent {
    constructor(mainNavService, mainService, auth, router, notificationService) {
        this.mainNavService = mainNavService;
        this.mainService = mainService;
        this.auth = auth;
        this.router = router;
        this.notificationService = notificationService;
    }
    ngOnInit() { }
    setNavTheme(value) {
        this.mainService.setNavTheme(value);
        this.mainService.settingsEmit.emit(true);
    }
    setDarkTheme(value) {
        this.mainService.setDarkTheme(value);
        this.mainService.settingsEmit.emit(true);
    }
    setFullBox(value) {
        this.mainService.setFullBox(value);
        this.mainService.settingsEmit.emit(true);
    }
    logout() {
        this.auth
            .signOut()
            .then(() => {
            this.router.navigate(['/login']);
        })
            .catch((error) => {
            this.notificationService.error('Error logging out, please try again later');
        });
    }
};
MainNavComponent = __decorate([
    Component({
        selector: 'fz-main-nav',
        templateUrl: './main-nav.component.html',
        styleUrls: ['./main-nav.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [MainNavService,
        MainService,
        AngularFireAuth,
        Router,
        NotificationService])
], MainNavComponent);
export { MainNavComponent };
//# sourceMappingURL=main-nav.component.js.map