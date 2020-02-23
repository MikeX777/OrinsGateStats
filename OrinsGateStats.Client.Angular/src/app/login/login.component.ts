import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../Services/player/player.service';
import { LoginRequest } from '../Services/Requests/LoginRequest';
import { GlobalService } from '../Services/global/global.service';
import { TokenResponse } from '../Services/Responses/TokenResponse';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public emailOrUsername = '';
  public password = '';
  public loading = false;


  constructor(
    private playerService: PlayerService,
    private globalService: GlobalService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    const request: LoginRequest = {
      emailOrUsername: this.emailOrUsername,
      password: this.password
    };

    this.playerService.Login(request).subscribe((response: TokenResponse) => {
      this.globalService.token = response.Token;
      this.globalService.playerID = response.PlayerID;
      this.snackBar.open('Login Successesful!', 'Close', {
        duration: 3000
      });
      this.router.navigate(['/dashboard']);
    },
    error => {
      this.loading = false;
      this.snackBar.open(error.error, 'Close', {
        duration: 3000
      });
    });
  }
}
