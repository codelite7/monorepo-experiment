import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { ModalComponent } from '../modal.component';
import { FooterPosition, Size } from '../modal';
import { ColorConfigService } from '@services/color-config.service';
import { MainService } from '@main/main.service';
import { Colors, ColorTheme, GrayColors } from '@services/model';

@Component({
  selector: 'fz-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent implements OnInit {
  @Input() size: Size;

  @Input() ariaDescription: string;

  @Input() timeHide: number;

  @Input() closeFloating = true;

  @Input() confirmClose = false;

  @Input() confirmLoading = false;

  @Input() confirmNotification = false;

  @Input() loadingBody = false;

  @Input() notificationBody = false;

  @Input() backgroundContainer: Colors | ColorTheme | GrayColors;

  @Input() animationIcon = 'swing';

  @Input() classBody: string;

  @Input() paddingBody = true;

  @Input() footerPosition: FooterPosition = 'center';

  @Input() borderFooter = true;

  @Input() classFooter: string;

  @ViewChild('modal') modal: ModalComponent;

  @ViewChild('icon') iconEl: ElementRef;

  @Output() onConfirm = new EventEmitter();

  @Output() onShow = new EventEmitter();

  @Output() onHide = new EventEmitter();

  showIcon = true;

  constructor(public mainService: MainService, public colorConfigService: ColorConfigService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.showIcon = this.iconEl?.nativeElement?.childNodes.length > 0 ? true : false;
  }

  show() {
    this.modal.show();
    this.onShow.emit(true);
  }

  hide() {
    this.modal.hide();
    this.onHide.emit(true);
  }

  confirm() {
    this.onConfirm.emit(true);
    if (this.confirmClose) {
      this.hide();
    }
    if (this.confirmLoading) {
      this.loadingBody = true;
    }
    if (this.confirmNotification) {
      this.notificationBody = true;
    }
  }

  get ligthTextContent() {
    return this.cBackgroundContainer && this.colorConfigService.isDark(this.cBackgroundContainer);
  }

  get modalClassFooter() {
    let classFooter = 'animated fadeIn ';
    if (this.classFooter) {
      classFooter += ` ${this.classFooter} `;
    }
    if (!this.borderFooter) {
      classFooter += ' pt-0 pb-3 ';
    }
    return classFooter;
  }

  get cBackgroundContainer() {
    if (this.backgroundContainer) {
      return this.backgroundContainer;
    }
    return this.mainService.getDarkTheme() ? 'dark' : '';
  }

  get modalSize() {
    return this.size ? this.size : 'sm';
  }
}
