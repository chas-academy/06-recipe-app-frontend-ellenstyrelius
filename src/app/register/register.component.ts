import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) {}

  handleRegister = (form: NgForm) => {
    /////////
    console.log(form)
    const userInfo = form.value;
    const requestBody = {
      'email': userInfo.email,
      'password': userInfo.password,
      'password_confirmation': userInfo.passwordRepeat === userInfo.password ? userInfo.passwordRepeat : 'mismatch'
    };

    const registerRequest = this.registerService.registerUser(requestBody);
    registerRequest.subscribe(data => {
    console.log('🐐: RegisterComponent -> handleRegister -> data', data)
      
    });
  }

  ngOnInit() {
  }

}
