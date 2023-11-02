import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { checkToken } from '@interceptors/token.interceptor';
import { Boards } from '@models/board.model';
import { Card } from '@models/card.model';
import { Colors } from '@models/colors.model';
import { List } from '@models/list.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BoardsService {

  apiUrl = environment.API_URL;
  bufferSpace = 65535;
  backgroundColors$ = new BehaviorSubject<Colors>('sky')

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getBoard(id: Boards['id']) {
    return this.http.get<Boards>(`${this.apiUrl}/boards/${id}`, {
      context: checkToken()
    });
  }

  createBoard(title: string, backgroundColor: Colors) {
    return this.http.post<Boards>(`${this.apiUrl}/boards`, {
      title,
      backgroundColor
    }, {
      context: checkToken()
    });
  }

  getPosition(cards: Card[], currentIndex: number) {
    if (cards.length === 1) {
      return this.bufferSpace;
    }

    if (cards.length > 1 && currentIndex === 0) {
      const onTopPosition = cards[1].position;
      return onTopPosition / 2;
    }

    const lastIndex = cards.length - 1;
    if (cards.length > 2 && currentIndex > 0 && currentIndex < lastIndex) {
      const prevPosition = cards[currentIndex - 1].position;
      const nextPosition = cards[currentIndex + 1].position;
      return (prevPosition + nextPosition) / 2;
    }

    if (cards.length > 1 && currentIndex === lastIndex) {
      const onBottomPosition = cards[lastIndex - 1].position;
      return onBottomPosition + this.bufferSpace;
    }

    return 0;
  }

  getPositionNewItem(elements: Card[] | List[]) {
    if (elements.length === 0) {
      return this.bufferSpace;
    }

    const lastIndex = elements.length - 1;
    const onBottomPosition = elements[lastIndex].position;
    return onBottomPosition + this.bufferSpace;
  }

  setBackgroundColors(color: Colors) {
    this.backgroundColors$.next(color);
  }
}
