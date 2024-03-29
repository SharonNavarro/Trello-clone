import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { checkToken } from '@interceptors/token.interceptor';
import { Boards } from "@models/board.model";

@Injectable()
export class MeService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getMeProfile() {
    return this.http.get<User>(`${this.apiUrl}/me/profile`, {
      context: checkToken(),
    });
  }

  getMeBoards() {
    return this.http.get<Boards[]>(`${this.apiUrl}/me/boards`, {
      context: checkToken(),
    });
  }
}
