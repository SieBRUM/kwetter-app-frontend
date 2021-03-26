import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionService } from './session.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    private sessionService: SessionService,
    private snackbarService: MatSnackBar,
    private translate: TranslateService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtToken = this.sessionService.getAuthorizationToken();

    if (jwtToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken.accessToken}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && error.url?.indexOf('authentication/login') === -1) {
          this.sessionService.logout();
          this.snackbarService.open(this.translate.instant(`INTERCEPTOR.ERRORMESSAGE`), undefined, {
            panelClass: 'error-snack',
            duration: 2500
          });
        }
        return throwError(error);
      })
    );
  }
}
