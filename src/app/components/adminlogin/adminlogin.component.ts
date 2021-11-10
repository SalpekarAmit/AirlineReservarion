import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  AdminLoginForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this. AdminLoginForm=new FormGroup({
     
      'username' : new FormControl("",[Validators.required]),
      'password' : new FormControl("",[Validators.required])   
  })
  }

}
