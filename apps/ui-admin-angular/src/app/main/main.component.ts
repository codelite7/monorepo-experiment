import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { MainService } from './main.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { LoadingGeneralService } from './loading-general/loading-general.service';

@Component({
  selector: 'fz-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.responsive(event.target.innerWidth, event.target.innerHeight);
  }

  constructor(public mainService: MainService, private loadingService: LoadingGeneralService, private router: Router) {}

  ngOnInit(): void {
    this.responsive(window.innerWidth, window.innerHeight);

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.loadingService.setOptions({ statusOverlay: false }).show(300);
      }
    });
  }

  /**
   * Responsive control
   *
   * @param {*} width
   * @param {*} height
   */
  responsive(width, height) {
    this.mainService.responsive = width < 800 ? true : false;
    this.mainService.responsiveTiny = width < 370 ? true : false;
    this.mainService.widthWindow = width;
    this.mainService.heightwindow = height;
    this.mainService.resizeWindowEmit.emit({ width, height });
    this.mainService.navState =
      !this.mainService.responsive && !this.mainService.getNavStateBackdrop() && this.mainService.getNavStateInit()
        ? true
        : false;
  }

  /**
   * Mount style url image nav image
   *
   * @readonly
   */
  get navBackgroundSrc() {
    const ext = this.mainService.webpSupport ? 'webp' : 'jpg';
    return this.mainService.getNavBackgroundImage()
      ? `url('assets/images/${this.mainService.getNavBackgroundImage()}.${ext}')`
      : '';
  }

  /**
   * Mount class control theme header
   *
   * @readonly
   */
  get headerColor() {
    return this.mainService.getHeaderTheme() ? `main-header-theme-${this.mainService.getHeaderTheme()}` : '';
  }
}
