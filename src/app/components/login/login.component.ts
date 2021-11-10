import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.LoginForm=new FormGroup({
     
        'username' : new FormControl("",[Validators.required]),
        'password' : new FormControl("",[Validators.required])   
    })
  }

}
