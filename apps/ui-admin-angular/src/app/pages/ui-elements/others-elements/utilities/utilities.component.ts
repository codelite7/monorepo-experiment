import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { ANIMATE, COLORS, COLORTHEMES } from '@services/model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Title } from '@angular/platform-browser';
import { MainService } from '@main/main.service';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss'],
})
export class UtilitiesComponent implements OnInit {
  colors: string[];

  animates = ANIMATE;

  animate: string;

  myDate = new Date();

  code = `function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello there!";
    document.getElementById("demo2").innerHTML = "How are you?";
}`;

  public ckeditor = ClassicEditor;

  public barChartOptions = {
    responsive: true,
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];

  constructor(public mainService: MainService, public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.colors = [...COLORS, ...COLORTHEMES];

    this.mainNavService.selectedItem('ui-utilities');
    this.titleService.setTitle('Utilities - Swarm IO');
  }
}
