import { Component, OnInit } from '@angular/core';
import { MainNavService } from '@main/main-nav/main-nav.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-complete-table',
  templateUrl: './complete-table.component.html',
  styleUrls: ['./complete-table.component.scss'],
})
export class CompleteTableComponent implements OnInit {
  table = [
    {
      id: '1',
      name: 'Fernando Zueet',
      img: 'user-profile',
      profession: 'Programmer',
      city: 'Poços de caldas',
      state: 'Active',
    },
    {
      id: '2',
      name: 'Trinity',
      profession: 'Engineer',
      img: 'user-profile1',
      city: 'New york',
      state: 'Active',
    },
    {
      id: '3',
      name: 'Renesmée',
      profession: 'Baker',
      img: 'user-profile2',
      city: 'Las vegas',
      state: 'Inactive',
    },
    {
      id: '4',
      name: 'Franklin',
      profession: 'Digital marketing',
      img: 'user-profile3',
      city: 'Buenos aires',
      state: 'Active',
    },
    {
      id: '5',
      name: 'Spike',
      profession: 'Bricklayer',
      img: 'user-profile4',
      city: 'Rio de janeiro',
      state: 'Active',
    },
    {
      id: '6',
      name: 'Gal',
      profession: 'Clerk',
      img: 'user-profile1',
      city: 'Hong kong',
      state: 'Inactive',
    },
    {
      id: '7',
      name: 'Dylan',
      profession: 'Transit agent',
      img: 'user-profile2',
      city: 'São paulo',
      state: 'Active',
    },
    {
      id: '8',
      name: 'Bruce',
      profession: 'Tester',
      img: 'user-profile3',
      city: 'Londres',
      state: 'Inactive',
    },
    {
      id: '9',
      name: 'Stephany',
      profession: 'Manager',
      img: 'user-profile4',
      city: 'Paris',
      state: 'Inactive',
    },
  ];

  search: string;

  constructor(public mainNavService: MainNavService, private titleService: Title) {}

  ngOnInit(): void {
    this.mainNavService.selectedItem('ui-tables', 'ui-complete-table');
    this.titleService.setTitle('Complete table - Swarm IO');
  }
}
