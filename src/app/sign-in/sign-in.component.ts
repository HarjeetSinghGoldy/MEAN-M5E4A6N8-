import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userForm: FormGroup;
  email:string='';
  username:string='';
  password:string='';
  firstName:string='';
  

  constructor(private api: ApiService,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'email' : [null, Validators.required],
      'username' : [null, Validators.required],
      'password' : [null, Validators.required],
      'firstName' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    console.log('user form data',form);
    this.api.postUser(form)
      .subscribe(res => {
        console.log('response',res);
          //let id = res['_id'];
          //this.router.navigate(['/book-details', id]);
          alert('user has been created');
        }, (err) => {
          console.log(err);
        });
  }
}
