import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import apiurl from '../apiurl';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  url = `${apiurl}/auth/register`;

  fetchData = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
  };

  registerUser(requestBody) {
    return this.http.post(this.url, requestBody, this.fetchData);
  
  }

}
