import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
  example = `<p fzColor textColor="primary">Text primary</p>
<p fzColor textColor="teal">Text teal</p>`;

  inputs = [
    {
      attribute: 'textColor',
      description: 'Color text',
      default: '',
      type: 'Colors | ColorTheme | GrayColors',
      required: false,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'backgroundColor',
      description: 'Color background',
      default: '',
      type: 'Colors | ColorTheme | GrayColors',
      required: false,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'backgroundTextColor',
      description: 'Color contrast and background',
      default: '',
      type: 'Colors | ColorTheme | GrayColors',
      required: false,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'colorContrast',
      description: 'Color contrat backgroundTextColor',
      default: 'white',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-directives-color');
  }
}
