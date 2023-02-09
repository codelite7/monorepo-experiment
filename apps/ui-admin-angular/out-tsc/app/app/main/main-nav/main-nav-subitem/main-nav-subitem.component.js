import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { MainNavService } from '../main-nav.service';
import { MainService } from '../../main.service';
let MainNavSubitemComponent = class MainNavSubitemComponent {
    constructor(mainNavService, mainService) {
        this.mainNavService = mainNavService;
        this.mainService = mainService;
        this.disabledClickHideBackdrop = false;
        this.showIcon = true;
        this.showBadge = true;
        this.active = false;
    }
    ngOnInit() {
        this.mainNavService.navItemSelectedEmit.subscribe(({ subitem }) => {
            if (this.name === subitem) {
                this.showActive(true);
            }
        });
        this.mainNavService.navSubitemClearClassEmit.subscribe(() => (this.active = false));
    }
    ngAfterContentChecked() {
        var _a, _b;
        if ((_a = this.iconEl) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            this.showIcon = this.iconEl.nativeElement.childNodes.length > 0 ? true : false;
        }
        if ((_b = this.badgeEl) === null || _b === void 0 ? void 0 : _b.nativeElement) {
            this.showBadge = this.badgeEl.nativeElement.childNodes.length > 0 ? true : false;
        }
    }
    /**
     * Show and active nav subitem
     *
     * @param {boolean} [contBackdrop=false]
     */
    showActive(contBackdrop = false) {
        this.mainNavService.clearClassNavSubitem();
        this.active = true;
        if (!this.disabledClickHideBackdrop && !contBackdrop) {
            this.mainService.navClickHideBackdrop();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], MainNavSubitemComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MainNavSubitemComponent.prototype, "disabledClickHideBackdrop", void 0);
__decorate([
    ViewChild('icon'),
    __metadata("design:type", ElementRef)
], MainNavSubitemComponent.prototype, "iconEl", void 0);
__decorate([
    ViewChild('badge'),
    __metadata("design:type", ElementRef)
], MainNavSubitemComponent.prototype, "badgeEl", void 0);
MainNavSubitemComponent = __decorate([
    Component({
        selector: 'fz-main-nav-subitem',
        templateUrl: './main-nav-subitem.component.html',
        styleUrls: ['./main-nav-subitem.component.scss'],
    }),
    __metadata("design:paramtypes", [MainNavService, MainService])
], MainNavSubitemComponent);
export { MainNavSubitemComponent };
//# sourceMappingURL=main-nav-subitem.component.js.map