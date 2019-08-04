import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import apiurl from './apiurl';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) {}

  url = `${apiurl}/auth/logout`;

  fetchData = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
  };

  logout() {
    const logoutRequest = this.http.get(this.url, this.fetchData);
    logoutRequest.subscribe(data => {
      localStorage.removeItem('accessToken');
      location.reload();
      return data;
    })
  }
}
