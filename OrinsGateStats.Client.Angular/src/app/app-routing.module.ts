import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';
import { TabbedCardComponent } from './tabbed-card/tabbed-card.component';
import { CharacterDashboardComponent } from './character-dashboard/character-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: TabbedCardComponent
  },
  {
    path: 'dashboard',
    component: PlayerDashboardComponent
  },
  {
    path: 'character/:id',
    component: CharacterDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
