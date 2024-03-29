import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  signupForm!:FormGroup;

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      first_name: new FormControl('',[Validators.required]),
      last_name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      phone_number: new FormControl('',[Validators.required]),
      password: new FormControl('',[
        Validators.required]),
      retype_password: new FormControl('',[Validators.required]),
      // address: new FormControl('',[]),
      // car_number: new FormControl('',[]),

      
    })
  }

  createAccount(data:any){
    window.alert("Account Created Successfully");
    console.log("User=>"+JSON.stringify(data,null,2));
  }

  get first_nameCtrl(){return this.signupForm.get('first_name');}
}
