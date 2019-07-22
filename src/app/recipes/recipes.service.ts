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

    const diet = '&diet=' + dietSelection.join('+');
    // const apiRequest = this.http.get<any>(`https://api.edamam.com/search?q=${input}&app_id=${appId}&app_key=${apiKey}&to=40${diet}`);
    const search = input.replace('+', ' ');
    
    console.log('🐐: RecipesService -> recipeSearch -> search', search)
    console.log('🐐: RecipesService -> recipeSearch -> diet', diet)
    
    //////////
    // SET SOME TIMEOUT ON THE REQUEST OR SOMETHING!!!!!!!!

    const apiRequest = this.http.get<any>(`${this.url}/search?q=${input}${diet}`, this.fetchData);
    return apiRequest;
  }

  recipeDetailSearch(recipeId) {
    const apiDetailRequest = this.http.get<any>(`${this.url}/${recipeId}`, this.fetchData);
    return apiDetailRequest;
  }

}
