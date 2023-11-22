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
export class NavbarComponent implements OnInit {

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClone;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;
  isOpenOverlayCreateBoard = false;

  user$ = this.authService.user$;
  navbarBackgroundColor: Colors = 'gray';
  navbarColors = NAVBAR_BACKGROUNDS;

  isDarkTheme: boolean = false;
  imageLogo!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private boardService: BoardsService
  ) {
    this.boardService.backgroundColors$
      .pipe(
        tap(res => {
          this.navbarBackgroundColor = res;
          console.log(this.navbarBackgroundColor);
        })
      )
      .subscribe();
  }

  ngOnInit() {
    this.loadTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.updateTheme();
  }

  loadTheme() {
    this.isDarkTheme = localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.updateTheme();
  }

  updateTheme() {
    const rootElement = document.documentElement;

    if (this.isDarkTheme) {
      this.imageLogo = "/assets/images/logo/logo-gradient-white-trello.png";
      rootElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      this.imageLogo = "/assets/images/logo/logo-gradient-neutral-trello.png";
      rootElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
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
