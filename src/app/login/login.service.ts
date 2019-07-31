import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  url = 'http://recipes.test/api/auth/login';

  fetchData = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
  };

  login(requestBody) {
    return this.http.post(this.url, requestBody, this.fetchData);
  }
}
