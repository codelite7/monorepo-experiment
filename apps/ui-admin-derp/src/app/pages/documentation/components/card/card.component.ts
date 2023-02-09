import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  example = `<fz-card>
    <h6 class="mb-0 d-flex align-items-center" header>
        <fz-icon-color-circle class="mr-2" color="purple" size="23" icon="fas fa-car-alt"></fz-icon-color-circle> Featured
    </h6>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button fzButton color="secondary">Go somewhere</button>
    <div footer class="text-muted">
        2 days ago
    </div>
</fz-card>`;

  inputs = [
    {
      attribute: 'background',
      description: 'Color background',
      default: 'primary',
      type: 'Colors | ColorTheme | GrayColors',
      required: true,
      actions: { gray: true, colors: true, colorsTheme: true },
    },
    {
      attribute: 'shadow',
      description: 'Shadow card',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'padding',
      description: 'Padding card',
      default: 'false',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'paddingHeader',
      description: 'Padding header card',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'paddingBody',
      description: 'Padding body card',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'paddingFooter',
      description: 'Padding footer card',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'classArea',
      description: 'Class area general',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'classHeader',
      description: 'Class area header',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'classBody',
      description: 'Class area body',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'classFooter',
      description: 'Class area footer',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'styleHeader',
      description: 'Header styles',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
    {
      attribute: 'styleFooter',
      description: 'Footer styles',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
  ];

  contents = [
    { attribute: 'top', description: 'Top area' },
    { attribute: 'header', description: 'Header area' },
    { attribute: 'footer', description: 'Footer area' },
    { attribute: 'bottom', description: 'Bottom area' },
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content card',
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-card');
  }
}
