import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  RegistrationForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.RegistrationForm= new FormGroup({
      'firstname' : new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+$") ]),
      'lastname' : new FormControl("",[Validators.required ,Validators.pattern("^[a-zA-Z]+$") ]),
      'mobile' : new FormControl("",[Validators.required, Validators.pattern("^((//+91-?)|0)?[0-9]{10}$")]),
      'username' : new FormControl("",[Validators.required]),
      'password' : new FormControl("",[Validators.required]),
      'email' : new FormControl("",[Validators.required,Validators.email]),
      'dob' : new FormControl("",[Validators.required]),
    })
  }

}
