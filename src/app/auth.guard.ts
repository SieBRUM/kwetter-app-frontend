import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private urlBlockWhenLoggedIn = [
    '/register',
    '/login'
  ];
  private urlBlockWhenLoggedOut = [
    '/home'
  ];

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAllowed(state.url);
  }

  private checkAllowed(url: string): boolean {
    if (this.sessionService.isLoggedIn() && this.urlBlockWhenLoggedIn.indexOf(url) > -1) {
      this.router.navigate(['/home']);
      return false;
    }

    if (!this.sessionService.isLoggedIn() && this.urlBlockWhenLoggedOut.indexOf(url) > -1) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
