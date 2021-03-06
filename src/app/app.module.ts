import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment.prod';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursesListComponent,
    HomeComponent,
    TournamentsComponent,
    HelpComponent,
    LoginComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
