import { Component, OnInit, Input, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { MainNavService } from '../main-nav.service';
import { MainService } from '../../main.service';
import { ExpansedHeight } from 'src/app/animation';

@Component({
  selector: 'fz-main-nav-item',
  templateUrl: './main-nav-item.component.html',
  styleUrls: ['./main-nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [ExpansedHeight()],
})
export class MainNavItemComponent implements OnInit {
  @Input() name: string;

  @Input() disabledClickHideBackdrop = false;

  @Input() borderBottom0: boolean;

  @ViewChild('icon') iconEl: ElementRef;

  @ViewChild('content') contentEl: ElementRef;

  @ViewChild('badge') badgeEl: ElementRef;

  state = 'hide';

  showIcon = true;

  showContent = true;

  showBadge = true;

  constructor(public mainNavService: MainNavService, public mainService: MainService) {}

  ngOnInit() {
    this.mainNavService.navItemSelectedEmit.subscribe(({ item }) => {
      if (this.name === item) {
        this.mainNavService.idSelectNav = this.name;
        this.mainNavService.statusNav = true;
        this.mainNavService.contNav = 0;
      }
    });
  }

  ngAfterContentChecked(): void {
    if (this.contentEl?.nativeElement) {
      this.showContent = this.contentEl.nativeElement.childNodes.length > 0 ? true : false;
    }
    if (this.badgeEl?.nativeElement) {
      this.showBadge = this.badgeEl.nativeElement.childNodes.length > 0 ? true : false;
    }
    if (this.iconEl?.nativeElement) {
      this.showIcon = this.iconEl.nativeElement.childNodes.length > 0 ? true : false;
    }
  }

  /**
   * Colapse nav
   */
  colapse() {
    if (this.mainNavService.idSelectNav === this.name && this.mainNavService.contNav === 0) {
      this.mainNavService.statusNav = false;
      this.mainNavService.contNav++;
    } else {
      this.mainNavService.statusNav = true;
      this.mainNavService.contNav = 0;
    }
    this.mainNavService.idSelectNav = this.name;
    if (!this.disabledClickHideBackdrop && !this.showContent) {
      this.mainService.navClickHideBackdrop();
    }
    this.mainNavService.clearClassNavSubitem();
  }

  /**
   * Animate angular colapse
   *
   * @readonly
   */
  get animateColapse() {
    return this.mainNavService.idSelectNav === this.name && this.mainNavService.statusNav ? 'show' : 'hide';
  }
}
