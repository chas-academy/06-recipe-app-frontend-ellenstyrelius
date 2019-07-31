import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {
    this.checkAccessToken();
  }

  isAuthenticated = false;

  checkAccessToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken)  {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  ngOnInit() {
  }

}
