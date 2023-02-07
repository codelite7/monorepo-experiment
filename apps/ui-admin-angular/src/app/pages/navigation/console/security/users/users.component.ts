import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '@main/notification/notification.service';
import { UsersService } from '@services/security/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, first, switchMap } from 'rxjs/operators';
import { LoadingGeneralService } from '@main/loading-general/loading-general.service';
import { User } from '@swarm-io/protos-api/dist/nodejs/swarm/v1alpha1/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];
  search: string;
  userToDelete: User | null;
  public inviteUserForm: FormGroup;

  constructor(
    public mainNavService: MainNavService,
    private titleService: Title,
    private usersService: UsersService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
    public loadingService: LoadingGeneralService
  ) {}

  get email() {
    return this.inviteUserForm.get('email');
  }

  ngOnInit(): void {
    this.mainNavService.selectedItem('webhooks');
    this.titleService.setTitle('Users - Swarm IO');
    this.usersService.listUsers().subscribe(
      (users) => (this.users = users),
      (error) => this.notificationService.error('Refresh the page to try again', 'Error loading users')
    );
    this.inviteUserForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('.+@.+\\..+')]],
    });
  }

  getDate(date: string): Date {
    return new Date(date);
  }

  deleteUser(): void {
    const email = this.userToDelete?.email;
    this.userToDelete = null;
    this.loadingService.setOptions({}).show();
    if (email) {
      this.usersService
        .deleteUser(email)
        .pipe(
          first(),
          finalize(() => this.loadingService.hide())
        )
        .subscribe(
          () => {
            this.notificationService.success(`Deleted user with email address ${email}`, 'Success');
            this.usersService
              .listUsers()
              .pipe(first())
              .subscribe(
                (users) => (this.users = users),
                (error) => this.notificationService.error('Refresh the page to try again', 'Error loading users')
              );
          },
          (error) =>
            this.notificationService.error('Failed to delete user, please refresh the page and try again', 'Error')
        );
    }
  }

  inviteUser(): void {
    this.loadingService.setOptions({}).show();
    const email = this.inviteUserForm.get('email')?.value;
    this.inviteUserForm.reset();
    this.usersService
      .inviteUser(email)
      .pipe(
        first(),
        switchMap(() => {
          return this.usersService.listUsers();
        }),
        finalize(() => {
          this.loadingService.hide();
        })
      )
      .subscribe(
        (users) => {
          this.users = users;
          this.notificationService.success('The user should receive an email with a sign in link', 'Success');
        },
        (error) => {
          this.notificationService.error('Refresh the page then try again', 'Error inviting user');
        }
      );
  }
}
