import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.scss'],
})
export class AcordionComponent implements OnInit {
  text = `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit`;

  constructor(public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('ui-others', 'ui-acordion');
    this.titleService.setTitle('Accordion - Swarm IO');
  }
}
