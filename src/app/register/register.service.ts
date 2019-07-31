import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  url = 'http://recipes.test/api/auth/register';

  fetchData = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    })
  };

  registerUser(requestBody) {
    console.log('🐐: RegisterService -> registerUser -> requestBody', requestBody)
    
    const registerRequest = this.http.post(this.url, requestBody, this.fetchData);
    return registerRequest;
  }

}
