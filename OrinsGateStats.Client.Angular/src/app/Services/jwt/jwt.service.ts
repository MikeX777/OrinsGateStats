import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  setJwt(token: string) {
    localStorage.setItem('token', token);
  }

  getJwt(): string {
    return localStorage.getItem('token');
  }

  getClaim(claim: string) {
    return jwt_decode(localStorage.getItem('token'))[claim];
  }

  isLoggedIn(): boolean {
    // tslint:disable-next-line: no-string-literal
    const expiresAt = jwt_decode(localStorage.getItem('token'))['exp'];
    return expiresAt > (new Date().getTime() / 1000);
  }
 }
