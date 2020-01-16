import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {LoginServicesService} from '../../services/login-services.service'
import { Login } from '../../interfaces/login.model';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private err:any;
  private loginForm: FormGroup;
  constructor(public router:Router,
              public loginService:LoginServicesService,
              private formBuilder:FormBuilder,
              private authService:AuthenticationService) { }
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username:['',[Validators.required,Validators.pattern('^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$')]],
      password:['',[Validators.required,Validators.maxLength(10),Validators.minLength(5)]]
    });
  }
  onlogin(){
    const data={
      grant_type:"password",
      email:this.loginForm.value.username,
      password:this.loginForm.value.password
    }
    this.loginService.onLogin(data).subscribe((res : any)=>{
      //console.log(data.access_token);
      const token = `${res.token_type} ${res.access_token}`;
      this.authService.login(token);
       //localStorage.setItem("name",token);
       this.router.navigate(['/tabs/tab1']);
    },err=>{
      this.err='loggin thất bại'
    });
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  public messages={
    username:[
      {type:'required',message:'Email is required'},
      {type:'pattern',message:'please enter a valid email address'}
    ],
    password:[
      { type: 'required', message: 'Password is required.'},
      { type: 'maxlength', message: 'Password can be longer than 10 characters' },
      { type: 'minlength', message: 'Password can be longer than 5 characters' },
    ],
  }
}
