import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';

import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';

import { TokenService } from './token.service';

import { ResponseLogin } from '@models/auth.model'
import { User } from '@models/user.model';
import { checkToken } from '@interceptors/token.interceptor';
import { MeService } from './me.service';

@Injectable()
export class AuthService {

  apiUrl = environment.API_URL;
  user$ = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private meService: MeService
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<ResponseLogin>(`${this.apiUrl}/auth/login`, {
      email,
      password
    })
      .pipe(
        tap({
          next: (response) => {
            this.tokenService.saveToken(response.access_token);
            this.tokenService.saveRefreshToken(response.refresh_token);
          }
        })
      )
  }

  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post<ResponseLogin>(`${this.apiUrl}/auth/refresh-token`, {
      refreshToken
    })
    .pipe(
      tap({
        next: (response) => {
          this.tokenService.saveToken(response.access_token);
          this.tokenService.saveRefreshToken(response.refresh_token);
        }
      })
    )
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, {
      name,
      email,
      password
    })
  }

  registerAndLogin(name: string, email: string, password: string) {
    return this.register(name, email, password)
      .pipe(
        switchMap(() => this.login(email, password))
      );
  }

  isAvailable(email: string) {
    return this.http.post<{ isAvailable: boolean }>(`${this.apiUrl}/auth/is-available`, {
      email
    })
  }

  recovery(email: string) {
    return this.http.post<{ isAvailable: boolean }>(`${this.apiUrl}/auth/recovery`, { email });
  }

  changePassword(token: string, newPassword: string) {
    return this.http.post<{ isAvailable: boolean }>(`${this.apiUrl}/auth/change-password`, { token, newPassword });
  }

  // getProfile() {
  //   return this.http.get<User>(`${this.apiUrl}/auth/profile`, { context: checkToken()}
  //   ).pipe(
  //     tap(user => {
  //       this.user$.next(user);
  //     })
  //   );
  // }

  getProfile() {
    return this.meService.getMeProfile()
    .pipe(
      tap(user => {
        this.user$.next(user);
      })
    );
  }

  logout() {
    this.tokenService.removeToken();
  }
}
