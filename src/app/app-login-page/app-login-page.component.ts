import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../models/login.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './app-login-page.component.html',
  styleUrls: ['./app-login-page.component.scss']
})
export class AppLoginPageComponent {
  isLoading = false;
  loginObject: ILogin;

  constructor(
    private router: Router
  ) {
    this.loginObject = {
      username: '',
      password: ''
    };
  }


  onClickLogin(): void {

  }

  onClickRegister(): void {
    this.router.navigate(['register']);
  }
}
