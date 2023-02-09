import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainNavService } from './main-nav.service';
import { MainService } from '../main.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NotificationService } from '@main/notification/notification.service';

@Component({
  selector: 'fz-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainNavComponent implements OnInit {
  constructor(
    public mainNavService: MainNavService,
    public mainService: MainService,
    public auth: AngularFireAuth,
    private router: Router,
    public notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

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
}
