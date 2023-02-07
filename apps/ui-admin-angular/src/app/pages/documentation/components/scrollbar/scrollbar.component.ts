import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
})
export class ScrollbarComponent implements OnInit {
  example = `<fz-scrollbar>
    <div class="py-2 px-2" style="height: 100px;">
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica
    </div>
</fz-scrollbar>`;

  inputs = [
    {
      attribute: 'classScrollbar',
      description: 'Class area scrollbar',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'idScrollbar',
      description: 'Id area scrollbar',
      default: '',
      type: 'string',
      required: false,
      actions: null,
    },
    {
      attribute: 'stateMouseenter',
      description: 'State mouseenter',
      default: 'true',
      type: 'boolean',
      required: true,
      actions: null,
    },
  ];

  contents = [
    {
      attribute: '<ng-content></ng-content>',
      description: 'General content scrollbar',
    },
  ];

  constructor(public mainNavService: MainNavService) {}

  ngOnInit(): void {
    this.mainNavService.selectedNav(2).selectedItem('doc-comp-others', 'doc-comp-scrollbar');
  }
}
