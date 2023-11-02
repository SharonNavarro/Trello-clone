import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBell,
  faInfoCircle,
  faClone,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { Colors, NAVBAR_BACKGROUNDS } from '@models/colors.model';
import { User } from '@models/user.model';
import { AuthService } from '@services/auth.service';
import { BoardsService } from '@services/boards.service';
import { tap } from 'rxjs';

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
  isOpenOverlayCreateBoard = false;

  user$ = this.authService.user$;
  navbarBackgroundColor: Colors = 'sky';
  navbarColors = NAVBAR_BACKGROUNDS;

  constructor(
    private authService: AuthService,
    private router: Router,
    private boardService: BoardsService
  ) {
    this.boardService.backgroundColors$
      .pipe(
        tap(res => {
          this.navbarBackgroundColor = res;
        })
      )
      .subscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  close(event: boolean) {
    this.isOpenOverlayCreateBoard = event;
  }

  get colors() {
    const classes = this.navbarColors[this.navbarBackgroundColor];
    return classes ? classes : {};
  }
}
