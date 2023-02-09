import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ColorConfigService } from '@services/color-config.service';
import { MainService } from '@main/main.service';
import { Colors, ColorTheme, GrayColors } from '@services/model';

@Component({
  selector: 'fz-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  @Input() background: Colors | ColorTheme | GrayColors;

  @Input() shadow = true;

  @Input() padding = false;

  @Input() paddingHeader = true;

  @Input() paddingBody = true;

  @Input() paddingFooter = true;

  @Input() classArea: string;

  @Input() classHeader: string;

  @Input() classBody: string;

  @Input() classFooter: string;

  @Input() styleHeader = true;

  @Input() styleFooter = true;

  @ViewChild('header') headerEl: ElementRef;

  @ViewChild('footer') footerEl: ElementRef;

  showHeader = false;

  showFooter = false;

  constructor(public mainService: MainService, public colorConfigService: ColorConfigService) {}

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    if (this.headerEl?.nativeElement) {
      this.showHeader = this.headerEl.nativeElement.childNodes.length > 0 ? true : false;
    }
    if (this.footerEl?.nativeElement) {
      this.showFooter = this.footerEl.nativeElement.childNodes.length > 0 ? true : false;
    }
  }

  get color() {
    return this.cBackground ? `bg-${this.cBackground}` : '';
  }

  get ligthTextContent() {
    return this.cBackground && this.colorConfigService.isDark(this.cBackground);
  }

  get cBackground() {
    if (this.background) {
      return this.background;
    }
    return this.mainService.getDarkTheme() ? 'dark' : '';
  }
}
