import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from '@main/main.service';
let PaginationComponent = class PaginationComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.active = 1;
        this.perPage = 5;
        this.circle = false;
        this.descPagination = 'Pagination';
        this.textBtPrevious = 'Previous';
        this.textBtNext = 'Next';
        this.iconBtPrevious = 'fas fa-chevron-left';
        this.iconBtNext = 'fas fa-chevron-right';
        this.actionsNextPrev = true;
        this.actionNumbers = true;
        this.textBtNextPrev = true;
        this.color = 'primary';
        this.pageChange = new EventEmitter();
        this.pages = [];
        this.firstPageAction = false;
        this.lastPageAction = false;
    }
    ngOnInit() {
        this.mountPages();
    }
    increment() {
        this.active++;
        this.mountPages();
    }
    decrement() {
        this.active--;
        this.mountPages();
    }
    activePage(page) {
        this.active = page;
        this.mountPages();
    }
    get numPages() {
        return Math.ceil(this.rows / this.perPage);
    }
    get positionNav() {
        return this.position ? `justify-content-${this.position}` : '';
    }
    /**
     * Mount pages
     */
    mountPages() {
        const page = Array(this.numPages)
            .fill(0)
            .map((x, i) => i + 1);
        let start = 0;
        let end = this.perPage;
        this.pageChange.emit(this.active);
        if (this.perPage > 0 && this.numPages > this.perPage) {
            [start, end] = this.rotation();
        }
        this.pages = page.slice(start, end);
        this.firstPageAction = !this.pages.find((element) => element === 1);
        this.lastPageAction = !this.pages.find((element) => element === this.numPages);
    }
    /**
     * @author ng-bootstrap
     * @link https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination.ts
     */
    rotation() {
        let start = 0;
        let end = this.numPages;
        const leftOffset = Math.floor(this.perPage / 2);
        const rightOffset = this.perPage % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.active <= leftOffset) {
            end = this.perPage;
        }
        else if (this.numPages - this.active < leftOffset) {
            start = this.numPages - this.perPage;
        }
        else {
            start = this.active - leftOffset - 1;
            end = this.active + rightOffset;
        }
        return [start, end];
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "active", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "rows", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "perPage", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "circle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "descPagination", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "textBtPrevious", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "textBtNext", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "iconBtPrevious", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "iconBtNext", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "actionsNextPrev", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "actionNumbers", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "textBtNextPrev", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PaginationComponent.prototype, "classPagination", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageChange", void 0);
PaginationComponent = __decorate([
    Component({
        selector: 'fz-pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService])
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map