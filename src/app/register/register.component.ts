import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerMsg: string;
  hasError: boolean;

  constructor(private registerService: RegisterService) {}

  handleRegister = (form: NgForm) => {
    const userInfo = form.value;
    const requestBody = {
      'email': userInfo.email,
      'password': userInfo.password,
      'password_confirmation': userInfo.passwordRepeat === userInfo.password ? userInfo.passwordRepeat : 'mismatch'
    };

    const registerRequest = this.registerService.registerUser(requestBody);
    registerRequest.subscribe(data => {
        this.hasError = false;
        this.registerMsg = 'Congrats, registration successful!'
      },
      err => {
        this.hasError = true;
        this.registerMsg = 'Unable to register :(';
      });
  }

  ngOnInit() {
  }

}
