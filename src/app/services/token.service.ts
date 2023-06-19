import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

}
