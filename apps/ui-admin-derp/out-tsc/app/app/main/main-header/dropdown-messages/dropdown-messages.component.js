import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DropdownMessagesComponent = class DropdownMessagesComponent {
    constructor() {
        this.state = true;
        this.messages = [
            {
                src: 'user-profile1',
                title: 'Addie',
                subtitle: 'Hi how are you?',
                time: 'Today',
                unread: true,
            },
            {
                src: 'user-profile4',
                title: 'Adamm',
                subtitle: 'Thank you!! 😍 ',
                time: 'Today',
                unread: false,
            },
            {
                src: 'user-profile2',
                title: 'Francine',
                subtitle: 'How is the weather in los angeles?',
                time: 'Today',
                unread: false,
            },
            {
                src: 'user-profile3',
                title: 'Becky',
                subtitle: "Wow you don't know what happened...",
                time: 'Today',
                unread: true,
            },
        ];
    }
    ngOnInit() { }
};
DropdownMessagesComponent = __decorate([
    Component({
        selector: 'fz-dropdown-messages',
        templateUrl: './dropdown-messages.component.html',
        styleUrls: ['./dropdown-messages.component.scss'],
    }),
    __metadata("design:paramtypes", [])
], DropdownMessagesComponent);
export { DropdownMessagesComponent };
//# sourceMappingURL=dropdown-messages.component.js.map