import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '@shared/ui-elements/modal/modal.component';

@Component({
  selector: 'fz-modal-fingerprint',
  templateUrl: './modal-fingerprint.component.html',
  styleUrls: ['./modal-fingerprint.component.scss'],
})
export class ModalFingerprintComponent implements OnInit {
  @ViewChild('modal') modal: ModalComponent;

  constructor() {}

  ngOnInit(): void {}

  show() {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }
}
