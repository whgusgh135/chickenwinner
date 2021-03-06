import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public afAuth: AuthService) {
  }

  login() {
    this.afAuth.login();
  }

  logout() {
    this.afAuth.logout();
  }

}
