import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  handleLogin = (form: NgForm) => {
    console.log('🐐: LoginComponent -> handleLogin -> form', form)
    
    const userInfo = form.value;
    const requestBody = {
      'email': userInfo.email,
      'password': userInfo.password,
      'remember_me': userInfo.rememberMe ? true : false
    };

    const loginRequest = this.loginService.login(requestBody);
    loginRequest.subscribe(data => {
    console.log('🐐: LoginComponent -> handleLogin -> data', data)
      
      localStorage.setItem('accessToken', data.access_token);
    });
  }

  ngOnInit() {
  }

}
