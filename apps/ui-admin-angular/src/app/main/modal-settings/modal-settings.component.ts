import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { COLORS } from '@services/model';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';
import { MainService } from '../main.service';

@Component({
  selector: 'fz-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalSettingsComponent implements OnInit {
  @ViewChild('modal') modal: ModalComponent;

  options: any = {};

  navBackground = ['nav1', 'nav2', 'nav3', 'nav4', 'nav5'];

  headerColors = COLORS;

  constructor(public mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.modalSettingsEmit.subscribe(() => this.modal.show());
    this.initSettings();

    this.mainService.settingsEmit.subscribe(() => {
      this.options.darkTheme = this.mainService.getDarkTheme() ? true : false;
      this.options.fullbox = this.mainService.getFullBox() ? true : false;
      this.options.navTheme = this.mainService.getNavTheme() === 'light' ? 'light' : 'dark';
    });
  }

  initSettings() {
    this.options.darkTheme = this.mainService.getDarkTheme();
    this.options.fullbox = this.mainService.getFullBox() ? true : false;
    this.options.navPosition = this.mainService.getNavPosition();
    this.options.navStateInit = this.mainService.getNavStateInit() ? 'true' : 'false';
    this.options.navStateBackdrop = this.mainService.getNavStateBackdrop();
    this.options.navBackgroundImageState = this.mainService.getNavBackgroundImageState();
    this.options.navBackgroundImage = this.mainService.getNavBackgroundImage();
    this.options.navTheme = this.mainService.getNavTheme();
    this.options.headerTheme = this.mainService.getHeaderTheme();
    this.options.headerFixed = this.mainService.getHeaderFixed();
    this.options.headerOptSearch = this.mainService.getHeaderOptSearch();
    this.options.headerOptNotification = this.mainService.getHeaderOptNotification();
    this.options.headerOptChat = this.mainService.getHeaderOptChat();
    this.options.headerOptEmail = this.mainService.getHeaderOptEmail();
    this.options.headerOptTask = this.mainService.getHeaderOptTask();
  }

  show() {
    this.modal.show();
  }

  get extImageBackgroundNav() {
    return this.mainService.webpSupport ? 'webp' : 'jpg';
  }
}
