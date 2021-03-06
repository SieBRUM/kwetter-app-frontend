import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-side-menu-bar',
  templateUrl: './app-side-menu-bar.component.html',
  styleUrls: ['./app-side-menu-bar.component.scss']
})
export class AppSideMenuBarComponent {

  @Input()
  pinned = false;

  @Output()
  pinnedChange: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public translate: TranslateService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  onChangeLanguage(language: string): void {
    if (!this.translate.langs.includes(language)) {
      language = this.translate.getDefaultLang();
    }

    localStorage.setItem('language', language);
    this.translate.use(language);
  }

  translateLanguage(language: string): string {
    return this.translate.instant(`SIDE_BAR.LANGUAGES.${language.toUpperCase()}`);
  }

  isOnRoute(buttonRoute: string): string {
    return this.router.url.indexOf(buttonRoute) > -1 ? 'primary' : '';
  }

  isLoggedIn(): boolean {
    return this.sessionService.isLoggedIn();
  }

  onClickNavigate(route: string): void {
    switch (route) {
      case 'home':
        this.router.navigate(['home']);
        break;
      case 'login':
        this.router.navigate(['login']);
        break;
      case 'register':
        this.router.navigate(['register']);
        break;
      default:
        break;
    }
  }

  onClickLogout(): void {
    this.sessionService.logout();
    return;
  }

  onClickPinMenu(): void {
    this.pinned = !this.pinned;
    this.pinnedChange.emit(this.pinned);
  }
}
