import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainService } from '@main/main.service';
let SearchHeaderComponent = class SearchHeaderComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.focus = false;
    }
    ngOnInit() { }
    search() { }
};
SearchHeaderComponent = __decorate([
    Component({
        selector: 'fz-search-header',
        templateUrl: './search-header.component.html',
        styleUrls: ['./search-header.component.scss'],
    }),
    __metadata("design:paramtypes", [MainService])
], SearchHeaderComponent);
export { SearchHeaderComponent };
//# sourceMappingURL=search-header.component.js.map