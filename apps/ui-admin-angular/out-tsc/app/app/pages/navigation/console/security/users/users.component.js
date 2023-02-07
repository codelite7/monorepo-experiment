import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { UsersService } from '@services/security/users.service';
import { FormBuilder, Validators } from '@angular/forms';
import { finalize, first, switchMap } from 'rxjs/operators';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
let UsersComponent = class UsersComponent {
    constructor(mainNavService, titleService, usersService, notificationService, fb, loadingService) {
        this.mainNavService = mainNavService;
        this.titleService = titleService;
        this.usersService = usersService;
        this.notificationService = notificationService;
        this.fb = fb;
        this.loadingService = loadingService;
    }
    get email() {
        return this.inviteUserForm.get('email');
    }
    ngOnInit() {
        this.mainNavService.selectedItem('webhooks');
        this.titleService.setTitle('Users - Swarm IO');
        this.usersService.listUsers().subscribe((users) => (this.users = users), (error) => this.notificationService.error('Refresh the page to try again', 'Error loading users'));
        this.inviteUserForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
        });
    }
    getDate(date) {
        return new Date(date);
    }
    deleteUser() {
        const email = this.userToDelete.email;
        this.userToDelete = null;
        this.loadingService.setOptions({}).show();
        this.usersService
            .deleteUser(email)
            .pipe(first(), finalize(() => this.loadingService.hide()))
            .subscribe(() => {
            this.notificationService.success(`Deleted user with email address ${email}`, 'Success');
            this.usersService
                .listUsers()
                .pipe(first())
                .subscribe((users) => (this.users = users), (error) => this.notificationService.error('Refresh the page to try again', 'Error loading users'));
        }, (error) => this.notificationService.error('Failed to delete user, please refresh the page and try again', 'Error'));
    }
    inviteUser() {
        this.loadingService.setOptions({}).show();
        const email = this.inviteUserForm.get('email').value;
        this.inviteUserForm.reset();
        this.usersService
            .inviteUser(email)
            .pipe(first(), switchMap(() => {
            return this.usersService.listUsers();
        }), finalize(() => {
            this.loadingService.hide();
        }))
            .subscribe((users) => {
            this.users = users;
            this.notificationService.success('The user should receive an email with a sign in link', 'Success');
        }, (error) => {
            this.notificationService.error('Refresh the page then try again', 'Error inviting user');
        });
    }
};
UsersComponent = __decorate([
    Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.scss'],
    }),
    __metadata("design:paramtypes", [MainNavService,
        Title,
        UsersService,
        NotificationService,
        FormBuilder,
        LoadingGeneralService])
], UsersComponent);
export { UsersComponent };
//# sourceMappingURL=users.component.js.map