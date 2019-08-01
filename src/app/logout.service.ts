import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) {}

  url = 'http://recipes.test/api/auth/logout';

  fetchData = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
  };

  logout() {
    const logoutRequest = this.http.get(this.url, this.fetchData);
    logoutRequest.subscribe(data => {
      console.log('🐐: LogoutService -> logout -> data', data)
      
      localStorage.removeItem('accessToken');
      location.reload();
    })
  }
}
