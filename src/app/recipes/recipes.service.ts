import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  recipeSearch(input: string) {

    const appId = ``;
    const apiKey = ``;

    const apiRequest = this.http.get<any>(`https://api.edamam.com/search?q=${input}&app_id=${appId}&app_key=${apiKey}`);

    return apiRequest;
  }
}
