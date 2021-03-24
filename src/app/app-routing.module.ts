import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginPageComponent } from './app-login-page/app-login-page.component';
import { AppRegisterPageComponent } from './app-register-page/app-register-page.component';
import { AppTimeLinePageComponent } from './app-time-line-page/app-time-line-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: AppTimeLinePageComponent, canActivate: [AuthGuard] },
  { path: 'register', component: AppRegisterPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AppLoginPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
