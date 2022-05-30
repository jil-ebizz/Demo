import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  loginUser(signInForm: NgForm){
    console.log(signInForm);
    console.log(signInForm.value.emailAdress); //extracting the email address here
    console.log(signInForm.value.password);  //extracting the password here
    console.log(signInForm.value.termsField); 
    console.log(signInForm.value.genderFiled);
    console.log(signInForm.value.address);
  }
}
