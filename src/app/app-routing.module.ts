import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TournamentsComponent} from './tournaments/tournaments.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tournaments', component: TournamentsComponent, canActivate: [AuthGuardService]},
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService, AdminAuthGuardService] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
