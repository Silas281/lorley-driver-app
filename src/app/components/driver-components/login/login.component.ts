import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm!: FormGroup;
  
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }

  login(data:any){
    console.log("Login success=>"+JSON.stringify(data,null,2));
    window.alert(JSON.stringify(data,null,2));
  }
}
