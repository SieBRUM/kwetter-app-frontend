import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeOption } from '../models/theme-option.model';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-change-menu',
  templateUrl: './app-theme-change-menu.component.html',
  styleUrls: ['./app-theme-change-menu.component.scss']
})
export class AppThemeChangeMenuComponent {

  @Input() options: Array<ThemeOption> | null = [];
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeService) { }

  changeTheme(themeToSet: string): void {
    this.themeChange.emit(themeToSet);
  }
}
