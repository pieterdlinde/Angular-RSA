import { Component } from '@angular/core';
import { User } from './models/user.model';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  private user: User = {
    userName: 'Pieter@email.com',
    password: 'ThisIsAPassword',
  };

  constructor(private loginService: LoginService) {}

  basicLogin() {
    this.loginService.basicLogin(this.user).subscribe(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  rsaLogin() {
    this.loginService.rsaLogin(this.user).subscribe(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  rsaAdvancedLogin() {
    this.loginService.rsaAdvancedLogin(this.user).subscribe(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
