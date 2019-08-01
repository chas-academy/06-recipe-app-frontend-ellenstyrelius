import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private logoutService : LogoutService) {
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

  clearStoredRecipeSearch = () => {
    if (this.accessToken)  {
      localStorage.removeItem('recipeSearch');
    }
  }

  logout = () => {
    this.logoutService.logout();
  }

  ngOnInit() {
  }

}
