import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ThemeOption } from './models/theme-option.model';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isMenuOpen = true;
  isMenuPinned = false;
  themeOptions: Observable<Array<ThemeOption>> = this.themeService.getThemeOptions();

  constructor(
    public translate: TranslateService,
    private router: Router,
    private themeService: ThemeService
  ) {
    this.initLanguage();
    this.initMenuBar();
    this.initTheme();
  }

  onClickSideBar(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getMenuMode(): MatDrawerMode {
    return this.isMenuPinned ? 'side' : 'over';
  }

  onPinnedChange(pinned: boolean): void {
    if (this.isMenuPinned === pinned) {
      return;
    }

    this.isMenuPinned = pinned;
    this.isMenuOpen = true;
    localStorage.setItem('menu-pinned', this.isMenuPinned.toString());
  }

  onThemeChange(themeToSet: string): void {
    localStorage.setItem('theme', themeToSet);
    this.themeService.setTheme(themeToSet);
  }

  initLanguage(): void {
    this.translate.addLangs(['en', 'nl']);
    this.translate.setDefaultLang('en');
    const localStorageLanguage = localStorage.getItem('language');
    const browserLang = this.translate.getBrowserLang();
    if (localStorageLanguage && this.translate.langs.includes(localStorageLanguage)) {
      this.translate.use(localStorageLanguage);
    } else if (this.translate.langs.includes(browserLang)) {
      this.translate.use(browserLang);
    } else {
      this.translate.use(this.translate.getDefaultLang());
    }
    localStorage.setItem('language', this.translate.currentLang);
  }

  initMenuBar(): void {
    const localStoragePinMenu = localStorage.getItem('menu-pinned');
    if (localStoragePinMenu === 'true') {
      this.isMenuPinned = true;
      this.isMenuOpen = true;
      return;
    }

    if (localStoragePinMenu === 'false') {
      this.isMenuPinned = false;
      this.isMenuOpen = false;
      return;
    }

    this.isMenuPinned = true;
    localStorage.setItem('menu-pinned', this.isMenuPinned.toString());
  }

  initTheme(): void {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme !== '' && localStorageTheme !== null) {
      this.themeService.setTheme(localStorageTheme);
      return;
    }

    this.themeService.setTheme('purple-green');
    localStorage.setItem('theme', 'purple-green');
  }
}
