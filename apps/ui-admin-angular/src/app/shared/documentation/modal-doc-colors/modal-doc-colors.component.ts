import { Component, OnInit, ViewChild } from '@angular/core';
import { COLORS, COLORTHEMES, GRAYCOLORS } from '@services/model';

@Component({
  selector: 'fz-modal-doc-colors',
  templateUrl: './modal-doc-colors.component.html',
  styleUrls: ['./modal-doc-colors.component.scss'],
})
export class ModalDocColorsComponent implements OnInit {
  colors = COLORS;

  colorsTheme = COLORTHEMES;

  colorsGray = GRAYCOLORS;

  colorsControl = {
    gray: false,
    colors: false,
    colorsTheme: false,
  };

  @ViewChild('modal') modal: any;

  constructor() {}

  ngOnInit() {}

  show({ gray = false, colors = false, colorsTheme = false }) {
    if (gray) {
      this.colorsControl.gray = true;
    }
    if (colors) {
      this.colorsControl.colors = true;
    }
    if (colorsTheme) {
      this.colorsControl.colorsTheme = true;
    }
    this.modal.show();
  }
}
