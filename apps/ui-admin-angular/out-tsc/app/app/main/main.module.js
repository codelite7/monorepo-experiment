import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LoadingGeneralComponent } from './loading-general/loading-general.component';
import { ModalSettingsComponent } from './modal-settings/modal-settings.component';
import { NotificationComponent } from './notification/notification.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainNavSubitemComponent } from './main-nav/main-nav-subitem/main-nav-subitem.component';
import { MainNavGroupComponent } from './main-nav/main-nav-group/main-nav-group.component';
import { MainNavItemComponent } from './main-nav/main-nav-item/main-nav-item.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DropdownHeaderComponent } from './main-header/dropdown-header/dropdown-header.component';
import { DropdownNotificationsComponent } from './main-header/dropdown-notifications/dropdown-notifications.component';
import { DropdownMessagesComponent } from './main-header/dropdown-messages/dropdown-messages.component';
import { DropdownTasksComponent } from './main-header/dropdown-tasks/dropdown-tasks.component';
import { DropdownUserComponent } from './main-header/dropdown-user/dropdown-user.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FloatingCardComponent } from './floating-card/floating-card.component';
import { SearchHeaderComponent } from './main-header/search-header/search-header.component';
let MainModule = class MainModule {
};
MainModule = __decorate([
    NgModule({
        declarations: [
            LoadingGeneralComponent,
            ModalSettingsComponent,
            NotificationComponent,
            MainNavComponent,
            MainNavSubitemComponent,
            MainNavGroupComponent,
            MainNavItemComponent,
            MainFooterComponent,
            DropdownHeaderComponent,
            DropdownNotificationsComponent,
            DropdownMessagesComponent,
            DropdownTasksComponent,
            DropdownUserComponent,
            MainHeaderComponent,
            FloatingCardComponent,
            SearchHeaderComponent,
        ],
        imports: [CommonModule, SharedModule],
        exports: [
            LoadingGeneralComponent,
            ModalSettingsComponent,
            NotificationComponent,
            MainNavComponent,
            MainNavSubitemComponent,
            MainNavGroupComponent,
            MainNavItemComponent,
            MainFooterComponent,
            DropdownHeaderComponent,
            DropdownNotificationsComponent,
            DropdownMessagesComponent,
            DropdownTasksComponent,
            DropdownUserComponent,
            MainHeaderComponent,
            FloatingCardComponent,
            SearchHeaderComponent,
        ],
    })
], MainModule);
export { MainModule };
//# sourceMappingURL=main.module.js.map