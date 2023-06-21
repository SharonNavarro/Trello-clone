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
export class NavbarComponent implements OnInit{
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClone;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;

  user: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (res) => {
        this.user = res;
      }
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
