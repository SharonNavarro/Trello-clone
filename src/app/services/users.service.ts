import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { checkToken } from '@interceptors/token.interceptor';

@Injectable()
export class UsersService {

  apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/users`, {context: checkToken()});
  }
}
