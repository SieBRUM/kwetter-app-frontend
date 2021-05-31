import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from './models/login.model';
import { IRegister } from './models/register.model';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_GATEWAY = environment.url;

  constructor(private http: HttpClient) { }

  /* GET calls */
  getTimeline(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.API_GATEWAY}kweet/timeline`, { observe: 'response' });
  }

  getTimeline(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.API_GATEWAY}kweet/timeline`, { observe: 'response' });
  }
  /* POST calls */
  registerUser(user: IRegister): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.API_GATEWAY}user`, user, { observe: 'response' });
  }

  loginUser(user: ILogin): Observable<HttpResponse<string>> {
    return this.http.post<string>(`${this.API_GATEWAY}authentication/login`, user, { observe: 'response' });
  }


}
