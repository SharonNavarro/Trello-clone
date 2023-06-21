import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '@models/user.model';

@Injectable()
export class UsersService {

  apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  httpOptions = (token: string) => ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    })
  });

  getUsers() {
    const token = this.tokenService.getToken();
    return this.http.get<User[]>(`${this.apiUrl}/users`,
      this.httpOptions(token)
    );
  }
}
