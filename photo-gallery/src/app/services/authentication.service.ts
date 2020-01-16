import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import {Router} from '@angular/router';
const TOKEN_KEY='auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  constructor(private plf:Platform,
              private router:Router) {
                this.plf.ready().then(() => {
                  this.checkToken();
                });
               }
  login(token){
    localStorage.setItem(TOKEN_KEY,token);
    this.authenticationState.next(true);
    // return this.storage.set(TOKEN_KEY,token).then(res=>{
    //   this.authenticationState.next(true);
    // });
  }
  logout(){
    localStorage.clear();
    this.authenticationState.next(false);
    this.router.navigate(['login']);
  }

  isAuthenticated(){
    return this.authenticationState.value
  }

  checkToken(){
    const token = localStorage.getItem(TOKEN_KEY);
    if(token){
      this.authenticationState.next(true); 
      console.log('111')
   }
   else 
   {
      this.authenticationState.next(false); 
   }
  }
}
