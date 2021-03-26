import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppSideMenuBarComponent } from './app-side-menu-bar/app-side-menu-bar.component';
import { StyleManagerService } from './style-manager.service';
import { ThemeService } from './theme.service';
import { AppThemeChangeMenuComponent } from './app-theme-change-menu/app-theme-change-menu.component';
import { AppLoginPageComponent } from './app-login-page/app-login-page.component';
import { AppRegisterPageComponent } from './app-register-page/app-register-page.component';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { AppTimeLinePageComponent } from './app-time-line-page/app-time-line-page.component';
import { AppInterceptor } from './app.interceptor';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    AppSideMenuBarComponent,
    AppThemeChangeMenuComponent,
    AppLoginPageComponent,
    AppRegisterPageComponent,
    AppHomePageComponent,
    AppTimeLinePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    StyleManagerService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }