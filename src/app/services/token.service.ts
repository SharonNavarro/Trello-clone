import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { getCookie, setCookie, removeCookie } from "typescript-cookie";

@Injectable()
export class TokenService {

  constructor(
    private _cookies: CookieService
  ) { }

  saveToken(token: string) {
    // localStorage.setItem('token', token);
    // setCookie('token', token, {expires: 365, path: '/'});
    this._cookies.set("token", token, 1, '/');
  }

  getToken() {
    // return localStorage.getItem('token');
    // const token = getCookie("token");
    return this._cookies.get("token");
  }

  removeToken() {
    // localStorage.removeItem('token');
    // removeCookie("token");
    this._cookies.delete("token");
  }

}
