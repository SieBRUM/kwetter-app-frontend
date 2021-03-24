import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './app-register-page.component.html',
  styleUrls: ['./app-register-page.component.scss']
})
export class AppRegisterPageComponent {

  registerObject: any = {};
  secondPassword = '';
  isLoading = false;

  constructor() { }

  onClickRegister(): void {

  }
}
