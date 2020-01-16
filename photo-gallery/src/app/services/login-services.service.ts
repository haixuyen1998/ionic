import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from './../interfaces/login.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
  constructor( public http:HttpClient) { }
  private loginUrl='https://sandbox.gotoally.com/oauth/token';
  onLogin(login: Login):Observable<Login>{
    return this.http.post<Login>(this.loginUrl,login);
  }
}
