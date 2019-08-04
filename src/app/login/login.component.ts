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
  isAuthenticated: boolean;

  constructor(private loginService: LoginService) {
    if (this.accessToken)  {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  accessToken = localStorage.getItem('accessToken');

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
        localStorage.setItem('accessToken', this.responseData.access_token);
      },
      err => err,
      () => {
        location.reload();
      }
    );
  }

  ngOnInit() {
  }

}
