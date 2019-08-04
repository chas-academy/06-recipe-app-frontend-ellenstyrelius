import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import apiurl from '../apiurl';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  url = `${apiurl}/recipes`;

  fetchData = {
    method: 'GET',
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': ''
    })
  }

  recipeSearch(input: string, dietSelection) {
    const diet = '&diet=' + dietSelection;
    const search = input.replace('+', ' ');
    const apiRequest = this.http.get<any>(`${this.url}/search?q=${search}${diet}`, this.fetchData);
    return apiRequest;
  }

  storeRecipeSearch(recipeSearch) {
    localStorage.setItem('recipeSearch', JSON.stringify(recipeSearch));
  }

  reloadRecipeSearch() {
    const storedRecipeSearch = JSON.parse(localStorage.getItem('recipeSearch'));
    return storedRecipeSearch;
  }

  removeRecipeSearch() {
    localStorage.removeItem('recipeSearch');
  }

  recipeDetailSearch(recipeId) {
    const apiDetailRequest = this.http.get<any>(`${this.url}/${recipeId}`, this.fetchData);
    return apiDetailRequest;
  }

}
