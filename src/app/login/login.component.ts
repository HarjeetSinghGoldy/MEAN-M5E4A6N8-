import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username:string='';
  password:string='';
  

  constructor(private router : Router, private api: ApiService,private formBuilder: FormBuilder) { }

  navigateToSignIn(){
this.router.navigate(['SignIn']);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  onFormSubmit(form : NgForm){
    this.api.postUserLoginForm(form).subscribe(
      response =>{
        console.log('login form resp',response);
        if(response.length > 0){
          //
          this.router.navigate(['books']);
          console.log('login suuccesful');
        }
        else{
          alert('username or password is incorrect');
        }
      }
    )
    
  }
}
