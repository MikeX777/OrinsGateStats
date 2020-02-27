import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../Requests/LoginRequest';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from '../Requests/RegisterRequest';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private path = `${environment.apiBaseUrl}api/player/`;

  constructor(
    private http: HttpClient,
    private jwtService: JwtService
    ) { }

  public Login(request: LoginRequest) {
    return this.http.post(`${this.path}login`, request);
  }

  public GetDashboard() {
    return this.http.get(`${this.path}dashboard/${this.jwtService.getClaim('PlayerID')}`);
  }

  public Register(request: RegisterRequest) {
    return this.http.post(`${this.path}register`, request);
  }
}
