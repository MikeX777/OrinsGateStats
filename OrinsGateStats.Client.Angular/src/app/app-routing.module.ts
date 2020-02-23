import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlayerDashboardComponent } from './player-dashboard/player-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TabbedCardComponent } from './tabbed-card/tabbed-card.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
