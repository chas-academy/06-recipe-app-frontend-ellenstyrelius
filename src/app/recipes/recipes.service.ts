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

    const apiRequest = this.http.get(`https://api.edamam.com/search?q=${input}&app_id=${appId}&app_key=${apiKey}`);

    return apiRequest;
  }
}
