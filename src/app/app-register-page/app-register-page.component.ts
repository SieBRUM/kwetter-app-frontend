import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../api.service';
import { IRegister } from '../models/register.model';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './app-register-page.component.html',
  styleUrls: ['./app-register-page.component.scss']
})
export class AppRegisterPageComponent {

  registerObject: IRegister;
  secondPassword = '';
  isLoading = false;

  constructor(
    private translate: TranslateService,
    private snackbarService: MatSnackBar,
    private apiService: ApiService,
    private router: Router,
    private sessionService: SessionService
  ) {
    this.registerObject = {
      username: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  onClickRegister(): void {

    if (this.registerObject.username.trim() === '') {
      this.showErrorNotification('REGISTER.NO_USERNAME');
      return;
    }

    if (this.registerObject.name.trim() === '') {
      this.showErrorNotification('REGISTER.NO_NAME');
      return;
    }

    if (this.registerObject.email.trim() === '') {
      this.showErrorNotification('REGISTER.INCORRECT_EMAIL');
      return;
    }

    if (this.registerObject.password.trim() === '') {
      this.showErrorNotification('REGISTER.NO_PASSWORD');
      return;
    }

    if (this.registerObject.confirmPassword !== this.registerObject.password) {
      this.showErrorNotification('REGISTER.INCORRECT_CONFIRM_PASSWORD');
      return;
    }

    this.isLoading = true;

    this.apiService.registerUser(this.registerObject).subscribe({
      next: (resp) => {
        this.isLoading = false;
        this.snackbarService.open(this.translate.instant('REGISTER.SUCCESSFUL'), undefined, {
          duration: 2500
        });

        this.router.navigate(['login']);
      },
      error: (err) => {
        this.isLoading = false;
        this.showErrorNotification(err.error);
      }
    });

  }

  shouldShowPrefix(type: string): boolean {
    const result = (document.activeElement === document.getElementById('username-input'));

    if (type === 'icon') {
      return (!result && this.registerObject.username.trim() === '');
    } else {
      return (result || this.registerObject.username.trim() !== '');
    }
  }

  private showErrorNotification(translateableMessage: string): void {
    this.snackbarService.open(this.translate.instant(translateableMessage), undefined, {
      panelClass: 'error-snack',
      duration: 2500
    });
  }
}
