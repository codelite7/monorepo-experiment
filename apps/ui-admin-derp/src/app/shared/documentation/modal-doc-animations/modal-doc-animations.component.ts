import { Component, OnInit, ViewChild } from '@angular/core';
import { ANIMATE } from '@services/model';

@Component({
  selector: 'fz-modal-doc-animations',
  templateUrl: './modal-doc-animations.component.html',
  styleUrls: ['./modal-doc-animations.component.scss'],
})
export class ModalDocAnimationsComponent implements OnInit {
  animate = ANIMATE;

  @ViewChild('modal') modal: any;

  constructor() {}

  ngOnInit() {}

  show() {
    this.modal.show();
  }
}
