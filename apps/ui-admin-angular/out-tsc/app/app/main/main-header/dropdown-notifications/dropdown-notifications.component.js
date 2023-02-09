import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DropdownNotificationsComponent = class DropdownNotificationsComponent {
    constructor() {
        this.state = true;
        this.notifications = [];
    }
    ngOnInit() { }
    action(event) {
        this.state = false;
        event.unread = false;
        // redirect route here
    }
};
DropdownNotificationsComponent = __decorate([
    Component({
        selector: 'fz-dropdown-notifications',
        templateUrl: './dropdown-notifications.component.html',
        styleUrls: ['./dropdown-notifications.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], DropdownNotificationsComponent);
export { DropdownNotificationsComponent };
//# sourceMappingURL=dropdown-notifications.component.js.map