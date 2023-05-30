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

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1'
        },
        {
          label: 'Sub Item 1.2'
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1'
        },
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1'
        },
        {
          label: 'Sub Item 3.2'
        },
        {
          label: 'Sub Item 3.3'
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
