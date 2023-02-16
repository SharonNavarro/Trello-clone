import { Component, OnInit } from '@angular/core';
import { faBox, faGavel, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {

  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faTrello = faTrello;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faGavel = faGavel;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
