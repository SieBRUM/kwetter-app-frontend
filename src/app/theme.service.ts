import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ThemeOption } from './models/theme-option.model';
import { StyleManagerService } from './style-manager.service';

@Injectable()
export class ThemeService {
    constructor(
        private http: HttpClient,
        private styleManager: StyleManagerService
    ) { }

    getThemeOptions(): Observable<Array<ThemeOption>> {
        return this.http.get<Array<ThemeOption>>('assets/theme_options.json');
    }

    setTheme(themeToSet: string): void {
        this.styleManager.setStyle(
            'theme',
            `/assets/themes/${themeToSet}.css`
        );
    }
}
