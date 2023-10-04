import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { checkToken } from '@interceptors/token.interceptor';
import { Boards } from '@models/board.model';

@Injectable()
export class BoardsService {

  apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getBoard(id: Boards['id']) {
    return this.http.get<Boards>(`${this.apiUrl}/api/v1/boards/${id}`, {
      context: checkToken()
    });
  }
}
