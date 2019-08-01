import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
    this.checkAccessToken();
  }

  isAuthenticated = false;
  accessToken = localStorage.getItem('accessToken');

  checkAccessToken() {
    if (this.accessToken)  {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }


  handleLogin = (form: NgForm) => {
    console.log('🐐: LoginComponent -> handleLogin -> form', form)
    
    const userInfo = form.value;
    const requestBody = {
      'email': userInfo.email,
      'password': userInfo.password,
      'remember_me': userInfo.rememberMe ? true : false
    };

    const loginRequest = this.loginService.login(requestBody);
    loginRequest.subscribe(
      data => {
        localStorage.setItem('accessToken', data.access_token);
        console.log('🐐: LoginComponent -> handleLogin -> data', data)
      },
      err => console.log(err),
      () => {
        location.reload();
      }
    );
  }

  ngOnInit() {
  }

}
