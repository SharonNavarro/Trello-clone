import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { getCookie, setCookie, removeCookie } from "typescript-cookie";
import jwt_decode, { JwtPayload } from "jwt-decode";
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
    this._cookies.delete("token", '/');
  }

  saveRefreshToken(token: string) {
    // localStorage.setItem('token', token);
    // setCookie('token', token, {expires: 365, path: '/'});
    this._cookies.set("refresh-token", token, 1, '/');
  }

  getRefreshToken() {
    // return localStorage.getItem('token');
    // const token = getCookie("token");
    return this._cookies.get("refresh-token");
  }

  removeRefreshToken() {
    // localStorage.removeItem('token');
    // removeCookie("token");
    this._cookies.delete("refresh-token", '/');
  }

  isValidToken() {
    const token = this.getToken();
    if(!token) {
      return false;
    }
    const decodeToken = jwt_decode<JwtPayload>(token);
    if(decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodeToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();
    }
    return false
  }

  isValidRefreshToken() {
    const token = this.getRefreshToken();
    if(!token) {
      return false;
    }
    const decodeToken = jwt_decode<JwtPayload>(token);
    if(decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodeToken.exp);
      const today = new Date();
      return tokenDate.getTime() > today.getTime();
    }
    return false
  }

}

