import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2, Output, EventEmitter } from '@angular/core';
import { FooterPosition, Size, FullMode } from './modal';
import { ColorConfigService } from '@services/color-config.service';
import { FadeAnimation } from 'src/app/animation';
import { MainService } from '@main/main.service';
import { Colors, ColorTheme, GrayColors } from '@services/model';

@Component({
  selector: 'fz-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [FadeAnimation()],
})
export class ModalComponent implements OnInit {
  @Input() ariaDescription: string;

  @Input() headerTitle: string;

  @Input() headerClose = false;

  @Input() closeFloating = false;

  @Input() backgroundOverlay: Colors | ColorTheme | GrayColors = 'dark';

  @Input() animated = 'bounceInDown';

  @Input() size: Size;

  @Input() backgroundContainer: Colors | ColorTheme | GrayColors;

  @Input() backdropBlur = false;

  @Input() paddingHeader = true;

  @Input() paddingBody = true;

  @Input() paddingFooter = true;

  @Input() borderHeader = true;

  @Input() borderFooter = true;

  @Input() classHeader: string;

  @Input() classBody: string;

  @Input() classFooter: string;

  @Input() footerPosition: FooterPosition = 'center';

  @Input() shadow = true;

  @Input() clickedOutside = true;

  @Input() scrollable = false;

  @Input() centered = false;

  @Input() fullMode: FullMode;

  @Input() zIndex: number;

  @Input() timeHide: number;

  @Input() loadingBody = false;

  @Input() loadingHideHeaders = false;

  @Input() classLoadingBody = 'modal-loading-body';

  @Input() notificationBody = false;

  @Input() notificationBodyHideHeaders = false;

  @ViewChild('header') headerEl: ElementRef;

  @ViewChild('footer') footerEl: ElementRef;

  @ViewChild('area') areaEl: ElementRef;

  @Output() onShow = new EventEmitter();

  @Output() onHide = new EventEmitter();

  status = false;

  showHeader = true;

  showBody = true;

  showFooter = true;

  constructor(
    public mainService: MainService,
    public colorConfigService: ColorConfigService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.areaEl && this.areaEl.nativeElement && this.status) {
      this.renderer.setAttribute(this.areaEl.nativeElement, 'aria-modal', 'true');
    }
    if (this.status) {
      this.showHeader = this.headerEl?.nativeElement?.childNodes.length > 0 ? true : false;
      this.showFooter = this.footerEl?.nativeElement?.childNodes.length > 0 ? true : false;
    }
  }

  show() {
    this.status = true;
    this.renderer.addClass(document.body, 'modal-open');
    if (this.timeHide) {
      setTimeout(() => this.hide(), this.timeHide);
    }
    this.onShow.emit(true);
  }

  hide() {
    this.status = false;
    this.renderer.removeClass(document.body, 'modal-open');
    this.onHide.emit(true);
  }

  onClickedOutside() {
    if (this.clickedOutside) {
      this.hide();
    }
  }

  get ligthTextContent() {
    return this.cBackgroundContainer && this.colorConfigService.isDark(this.cBackgroundContainer);
  }

  get modalBackgroundContainer() {
    return this.cBackgroundContainer ? `bg-${this.cBackgroundContainer}` : '';
  }

  get modalBackgroundOverlay() {
    return this.backgroundOverlay ? `bg-${this.backgroundOverlay}` : '';
  }

  get modalSize() {
    return this.size ? `modal-${this.size}` : '';
  }

  get modalFooterPosition() {
    return this.footerPosition ? `modal-footer-pos-${this.footerPosition}` : '';
  }

  get validHideHeaders() {
    const validLoading = this.loadingBody && this.loadingHideHeaders ? false : true;
    const validNotification = this.notificationBody && this.notificationBodyHideHeaders ? false : true;
    return validLoading && validNotification;
  }

  get validShowHeader() {
    return (this.showHeader || this.headerTitle || this.headerClose) && this.validHideHeaders;
  }

  get validShowFooter() {
    return this.showFooter && this.validHideHeaders;
  }

  get cBackgroundContainer() {
    if (this.backgroundContainer) {
      return this.backgroundContainer;
    }
    return this.mainService.getDarkTheme() ? 'dark' : '';
  }
}
