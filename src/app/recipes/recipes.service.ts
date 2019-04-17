import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  fetchData = {
    method: 'GET',
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': ''
    })
  }

  url = 'http://recipes.test/api/recipes';

  recipeSearch(/*input: string, dietSelection*/) {
    // const diet = dietSelection.join('');
    // const apiRequest = this.http.get<any>(`https://api.edamam.com/search?q=${input}&app_id=${appId}&app_key=${apiKey}&to=40${diet}`);

    //////////
    // SET SOME TIMEOUT ON THE REQUEST OR SOMETHING!!!!!!!!

    const apiRequest = this.http.get<any>(this.url, this.fetchData);
    return apiRequest;
  }

  recipeDetailSearch(recipeId) {
    const apiDetailRequest = this.http.get<any>(`${this.url}/${recipeId}`, this.fetchData);
    return apiDetailRequest;
  }

}
