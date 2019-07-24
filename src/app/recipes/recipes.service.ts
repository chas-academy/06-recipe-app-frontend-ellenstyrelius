import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  url = 'http://recipes.test/api/recipes';

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
    // const apiRequest = this.http.get<any>(`https://api.edamam.com/search?q=${input}&app_id=${appId}&app_key=${apiKey}&to=40${diet}`);
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
