import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { MainNavService } from '../main-nav.service';
import { MainService } from '../../main.service';
import { ExpansedHeight } from 'src/app/animation';
let MainNavItemComponent = class MainNavItemComponent {
    constructor(mainNavService, mainService) {
        this.mainNavService = mainNavService;
        this.mainService = mainService;
        this.disabledClickHideBackdrop = false;
        this.state = 'hide';
        this.showIcon = true;
        this.showContent = true;
        this.showBadge = true;
    }
    ngOnInit() {
        this.mainNavService.navItemSelectedEmit.subscribe(({ item }) => {
            if (this.name === item) {
                this.mainNavService.idSelectNav = this.name;
                this.mainNavService.statusNav = true;
                this.mainNavService.contNav = 0;
            }
        });
    }
    ngAfterContentChecked() {
        var _a, _b, _c;
        if ((_a = this.contentEl) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            this.showContent = this.contentEl.nativeElement.childNodes.length > 0 ? true : false;
        }
        if ((_b = this.badgeEl) === null || _b === void 0 ? void 0 : _b.nativeElement) {
            this.showBadge = this.badgeEl.nativeElement.childNodes.length > 0 ? true : false;
        }
        if ((_c = this.iconEl) === null || _c === void 0 ? void 0 : _c.nativeElement) {
            this.showIcon = this.iconEl.nativeElement.childNodes.length > 0 ? true : false;
        }
    }
    /**
     * Colapse nav
     */
    colapse() {
        if (this.mainNavService.idSelectNav === this.name && this.mainNavService.contNav === 0) {
            this.mainNavService.statusNav = false;
            this.mainNavService.contNav++;
        }
        else {
            this.mainNavService.statusNav = true;
            this.mainNavService.contNav = 0;
        }
        this.mainNavService.idSelectNav = this.name;
        if (!this.disabledClickHideBackdrop && !this.showContent) {
            this.mainService.navClickHideBackdrop();
        }
        this.mainNavService.clearClassNavSubitem();
    }
    /**
     * Animate angular colapse
     *
     * @readonly
     */
    get animateColapse() {
        return this.mainNavService.idSelectNav === this.name && this.mainNavService.statusNav ? 'show' : 'hide';
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], MainNavItemComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MainNavItemComponent.prototype, "disabledClickHideBackdrop", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MainNavItemComponent.prototype, "borderBottom0", void 0);
__decorate([
    ViewChild('icon'),
    __metadata("design:type", ElementRef)
], MainNavItemComponent.prototype, "iconEl", void 0);
__decorate([
    ViewChild('content'),
    __metadata("design:type", ElementRef)
], MainNavItemComponent.prototype, "contentEl", void 0);
__decorate([
    ViewChild('badge'),
    __metadata("design:type", ElementRef)
], MainNavItemComponent.prototype, "badgeEl", void 0);
MainNavItemComponent = __decorate([
    Component({
        selector: 'fz-main-nav-item',
        templateUrl: './main-nav-item.component.html',
        styleUrls: ['./main-nav-item.component.scss'],
        encapsulation: ViewEncapsulation.None,
        animations: [ExpansedHeight()],
    }),
    __metadata("design:paramtypes", [MainNavService, MainService])
], MainNavItemComponent);
export { MainNavItemComponent };
//# sourceMappingURL=main-nav-item.component.js.map