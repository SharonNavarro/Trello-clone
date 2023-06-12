import { Component, OnInit } from '@angular/core';
import { faBell, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar-shared',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  isOpen: boolean = false;
  isOpenBody: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
