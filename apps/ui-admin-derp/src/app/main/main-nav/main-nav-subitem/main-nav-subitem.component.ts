import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MainNavService } from '../main-nav.service';
import { MainService } from '../../main.service';

@Component({
  selector: 'fz-main-nav-subitem',
  templateUrl: './main-nav-subitem.component.html',
  styleUrls: ['./main-nav-subitem.component.scss'],
})
export class MainNavSubitemComponent implements OnInit {
  @Input() name: string;

  @Input() disabledClickHideBackdrop = false;

  @ViewChild('icon') iconEl: ElementRef;

  @ViewChild('badge') badgeEl: ElementRef;

  showIcon = true;

  showBadge = true;

  active = false;

  constructor(public mainNavService: MainNavService, public mainService: MainService) {}

  ngOnInit(): void {
    this.mainNavService.navItemSelectedEmit.subscribe(({ subitem }) => {
      if (this.name === subitem) {
        this.showActive(true);
      }
    });
    this.mainNavService.navSubitemClearClassEmit.subscribe(() => (this.active = false));
  }

  ngAfterContentChecked(): void {
    if (this.iconEl?.nativeElement) {
      this.showIcon = this.iconEl.nativeElement.childNodes.length > 0 ? true : false;
    }
    if (this.badgeEl?.nativeElement) {
      this.showBadge = this.badgeEl.nativeElement.childNodes.length > 0 ? true : false;
    }
  }

  /**
   * Show and active nav subitem
   *
   * @param {boolean} [contBackdrop=false]
   */
  showActive(contBackdrop = false) {
    this.mainNavService.clearClassNavSubitem();
    this.active = true;
    if (!this.disabledClickHideBackdrop && !contBackdrop) {
      this.mainService.navClickHideBackdrop();
    }
  }
}
