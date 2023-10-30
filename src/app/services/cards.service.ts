import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { checkToken } from '@interceptors/token.interceptor';
import { Card, CreateCardDto, UpdateCardDto } from '@models/card.model';

@Injectable()
export class CardsService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  create(dto: CreateCardDto) {
    return this.http.post<Card>(`${this.apiUrl}/cards`, dto, {
      context: checkToken(),
    });
  }

  update(id: Card['id'], changes: UpdateCardDto) {
    return this.http.put<User>(`${this.apiUrl}/cards/${id}`, changes, {
      context: checkToken(),
    });
  }
}
