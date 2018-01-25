import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TournamentsComponent} from './tournaments/tournaments.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'help', component: HelpComponent }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
