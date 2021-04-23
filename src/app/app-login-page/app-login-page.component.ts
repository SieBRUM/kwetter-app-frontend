import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../api.service';
import { ILogin } from '../models/login.model';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './app-login-page.component.html',
  styleUrls: ['./app-login-page.component.scss']
})
export class AppLoginPageComponent {
  isLoading = false;
  loginObject: ILogin;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private snackbarService: MatSnackBar,
    private apiService: ApiService,
    private sessionService: SessionService
  ) {
    this.loginObject = {
      username: '',
      password: ''
    };
  }


  onClickLogin(): void {
    if (this.loginObject.username.trim() === '') {
      this.showErrorNotification('LOGIN.NO_USERNAME');
      return;
    }

    if (this.loginObject.password.trim() === '') {
      this.showErrorNotification('LOGIN.NO_PASSWORD');
      return;
    }

    this.isLoading = true;

    this.apiService.loginUser(this.loginObject).subscribe({
      next: (resp) => {
        this.isLoading = false;
        this.snackbarService.open(this.translate.instant('LOGIN.SUCCESSFUL'), undefined, {
          duration: 2500
        });

        this.sessionService.setCurrentUser({
          accessToken: resp.body as string,
          roles: []
        });

        this.router.navigate(['home']);
      },
      error: (err) => {
        this.isLoading = false;
        this.showErrorNotification(err.error);
      }
    });
  }

  onClickRegister(): void {
    this.router.navigate(['register']);
  }

  shouldShowPrefix(type: string): boolean {
    const result = (document.activeElement === document.getElementById('username-input') && document.activeElement !== null);

    if (type === 'icon') {
      return (!result && this.loginObject.username.trim() === '');
    } else {
      return (result || this.loginObject.username.trim() !== '');
    }
  }

  private showErrorNotification(translateableMessage: string): void {
    this.snackbarService.open(this.translate.instant(translateableMessage), undefined, {
      panelClass: 'error-snack',
      duration: 2500
    });
  }
}
