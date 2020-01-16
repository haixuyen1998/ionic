import { Component} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{Router} from '@angular/router';
import {Login} from '../../modal/login.modal';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public login:Login;
  constructor(
    public http:HttpClient,
    public router:Router
  ){}
  matches:any[]=[];
  ngOnInit() {
    this.login=new Login('','');
  }
  private LoginUrl='https://sandbox.gotoally.com/oauth/token';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'true'
      })
    }
    onlogin(value){
      const data={
        grant_type:"password",
        email:value.username,
        password:value.password
      }
      this.http.post(this.LoginUrl,data,this.httpOptions).subscribe( (res : any)=>{
       //console.log(data.access_token);
       const token = `${res.token_type} ${res.access_token}`;
        localStorage.setItem("name",token);
       // var b=this.localStorage.getItem("name")+' '+this.localStorage.getItem("data");
        //localStorage.getItem('name')
          return this.router.navigate(['/detail'])
      },error=>{
       console.log(error);
      });
    }
}
