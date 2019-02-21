import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { credentials } from '../api-key';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  recipeSearch(input: string) {
    const {appId, apiKey} = credentials;

    const apiRequest = this.http.get<any>(`https://api.edamam.com/search?q=${input}&app_id=${appId}&app_key=${apiKey}`);

    return apiRequest;
  }

  recipeDetailSearch(recipeId: string) {
    const {appId, apiKey} = credentials;

    const apiDetailRequest = this.http.get<any>(`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${recipeId}&app_id=${appId}&app_key=${apiKey}`);

    return apiDetailRequest;
  }

}
