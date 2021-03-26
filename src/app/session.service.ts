import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISessionCookie } from './models/session-cookie.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private userCookie: ISessionCookie | null;
  public redirectUrl = '';

  constructor(
    private router: Router
  ) {
    if (localStorage.getItem('user-cookie')) {
      this.userCookie = JSON.parse(localStorage.getItem('user-cookie') as string);

    } else {
      this.userCookie = null;
    }
  }

  getCurrentUserCookie(): ISessionCookie | null {
    return this.userCookie;
  }

  getAuthorizationToken(): ISessionCookie | null {
    if (!this.userCookie) {
      return null;
    }

    return this.userCookie;
  }

  setCurrentUser(cookie: ISessionCookie, navigate: boolean = true): void {
    this.userCookie = cookie;
    localStorage.setItem('user-cookie', JSON.stringify(cookie));

    if (!navigate) {
      return;
    }

    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
      this.redirectUrl = '';
    } else {
      this.router.navigateByUrl('/home');
    }
  }

  logout(url: string = ''): void {
    this.redirectUrl = url;
    localStorage.removeItem('user-cookie');
    this.userCookie = null;
    // We do this so we don't navigate when its not needed
    // Ex. user is on the "shopping" page and logs out. This page is both accessible by
    // non-logged in users and logged in users.
    const currentRouteConfig = this.router.config.find(f => f.path === this.router.url.substr(1));
    if (currentRouteConfig != null && currentRouteConfig.canActivate != null) {
      this.redirectUrl = this.router.url;
      this.router.navigate(['login']);
    }
  }

  isLoggedIn(): boolean {
    return this.userCookie ? true : false;
  }
}
