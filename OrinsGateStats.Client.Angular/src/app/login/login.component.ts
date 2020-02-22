import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../Services/player/player.service';
import { LoginRequest } from '../Services/Requests/LoginRequest';
import { GlobalService } from '../Services/global/global.service';
import { TokenResponse } from '../Services/Responses/TokenResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public emailOrUsername = '';
  public password = '';


  constructor(private playerService: PlayerService, private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  login() {
    const request: LoginRequest = {
      emailOrUsername: this.emailOrUsername,
      password: this.password
    };

    this.playerService.Login(request).subscribe((response: TokenResponse) => {
      this.globalService.token = response.Token;
      this.globalService.playerID = response.PlayerID;
    });
  }
}
