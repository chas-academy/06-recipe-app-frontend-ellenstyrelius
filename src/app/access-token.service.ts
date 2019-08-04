import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import apiurl from './apiurl';

@Injectable({
  providedIn: 'root'
})
export class AccessTokenService {

  constructor(private http: HttpClient) {}

  url = `${apiurl}/auth/user`;
  accessToken = localStorage.getItem('accessToken');

  fetchData = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    })
  };

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  getUser() {
    if (this.accessToken) {
      const user = this.http.get<any>(this.url, this.fetchData);
      user.subscribe(data => {
        return data;
      });
    }
  }
}
