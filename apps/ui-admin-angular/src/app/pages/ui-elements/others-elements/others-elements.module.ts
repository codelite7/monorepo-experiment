import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { BadgeComponent } from './badge/badge.component';
import { BreadcrumpComponent } from './breadcrump/breadcrump.component';
import { AcordionComponent } from './acordion/acordion.component';
import { TabsComponent } from './tabs/tabs.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { IconsComponent } from './icons/icons.component';
import { LoadingsComponent } from './loadings/loadings.component';
import { ProgressComponent } from './progress/progress.component';
import { CardsComponent } from './cards/cards.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { RatingComponent } from './rating/rating.component';
import { CircularProgressComponent } from './circular-progress/circular-progress.component';

const routes: Routes = [
  {
    path: 'badge',
    component: BadgeComponent,
  },
  {
    path: 'breadcrump',
    component: BreadcrumpComponent,
  },
  {
    path: 'accordion',
    component: AcordionComponent,
  },
  {
    path: 'tabs',
    component: TabsComponent,
  },
  {
    path: 'dropdowns',
    component: DropdownsComponent,
  },
  {
    path: 'tooltips',
    component: TooltipsComponent,
  },
  {
    path: 'list-group',
    component: ListGroupComponent,
  },
  {
    path: 'icons',
    component: IconsComponent,
  },
  {
    path: 'loadings',
    component: LoadingsComponent,
  },
  {
    path: 'progress',
    component: ProgressComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'utilities',
    component: UtilitiesComponent,
  },
  {
    path: 'rating',
    component: RatingComponent,
  },
  {
    path: 'circular-progress',
    component: CircularProgressComponent,
  },
];

@NgModule({
  declarations: [
    BadgeComponent,
    BreadcrumpComponent,
    AcordionComponent,
    TabsComponent,
    DropdownsComponent,
    TooltipsComponent,
    ListGroupComponent,
    IconsComponent,
    LoadingsComponent,
    ProgressComponent,
    CardsComponent,
    FormsComponent,
    ButtonsComponent,
    UtilitiesComponent,
    RatingComponent,
    CircularProgressComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class OthersElementsModule {}
