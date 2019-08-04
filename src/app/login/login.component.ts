import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  responseData: any;

  constructor(private loginService: LoginService) {
    this.checkAccessToken();
  }

  isAuthenticated: boolean;
  accessToken = localStorage.getItem('accessToken');

  checkAccessToken() {
    if (this.accessToken)  {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  handleLogin = (form: NgForm) => {
    const userInfo = form.value;
    const requestBody = {
      'email': userInfo.email,
      'password': userInfo.password,
      'remember_me': userInfo.rememberMe ? true : false
    };

    const loginRequest = this.loginService.login(requestBody);
    loginRequest.subscribe(
      data => {
        this.responseData = data;
      },
      err => err,
      () => {
        localStorage.setItem('accessToken', this.responseData.access_token);
        location.reload();
      }
    );
  }

  ngOnInit() {
  }

}
