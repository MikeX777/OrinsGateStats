import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from '../Services/Requests/RegisterRequest';
import { PlayerService } from '../Services/player/player.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public email: string;
  public username: string;
  public password: string;
  public confirmPassword: string;
  public loading = false;

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  register() {
    const request: RegisterRequest = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword
    };
    this.loading = true;
    console.log('request', request);

    this.playerService.Register(request).subscribe(response => {
      this.loading = false;
      this.firstName = null;
      this.lastName = null;
      this.email = null;
      this.username = null;
      this.password = null;
      this.confirmPassword = null;
      this.snackBar.open('Player created!', 'Close', {
        duration: 3000
      });
      this.router.navigate(['/login']);
    },
    errorResponse => {
      console.log(errorResponse);
      this.loading = false;
      this.snackBar.open(errorResponse?.error?.errors[0]?.msg, 'Close', {
        duration: 3000
      });
    });
  }
}
