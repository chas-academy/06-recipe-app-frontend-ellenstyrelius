import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { credentials } from '../api-key';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  recipeSearch(/*input: string, dietSelection*/) {
    // const {appId, apiKey} = credentials;
    // const diet = dietSelection.join('');
    // const apiRequest = this.http.get<any>(`https://api.edamam.com/search?q=${input}&app_id=${appId}&app_key=${apiKey}&to=40${diet}`);
    const url = 'http://recipes.test/api/recipes';
    // const httpHeaders = {
    //   // 'Authorization': 'Bearer ' + API_TOKEN,
    //   'Content-Type': 'application/json',
    //   'X-Requested-With': 'XMLHttpRequest'
    // }
    // const fetchData = {
    //   // method: 'GET',
    //   headers: httpHeaders
    // }
    const fetchData = {
      method: 'GET',
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': ''
      })
    }
    const apiRequest = this.http.get<any>(url, fetchData);
    return apiRequest;
  }

  recipeDetailSearch(recipeId: string) {
    const {appId, apiKey} = credentials;
    const apiDetailRequest = this.http.get<any>(`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${recipeId}&app_id=${appId}&app_key=${apiKey}`);
    return apiDetailRequest;
  }

}
