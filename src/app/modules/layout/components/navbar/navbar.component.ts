import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBell,
  faInfoCircle,
  faClone,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { User } from '@models/user.model';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClone;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;
  isOpenOverlayCreateBoard= false;

  user$= this.authService.user$;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    console.log('hey')
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
