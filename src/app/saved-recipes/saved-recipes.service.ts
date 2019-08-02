import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavedRecipesService {

  constructor(private http: HttpClient) { }

  url = 'http://recipes.test/api/auth/saved-recipes/';
  accessToken = localStorage.getItem('accessToken');

  fetchData = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json'
    })
  }

  saveRecipe(recipeDetails) {
    const { id, label, image } = recipeDetails;
    const requestBody = {
      'id': id,
      'label': label,
      'image': image
    }
    const request = this.http.post(this.url, requestBody, this.fetchData);
    request.subscribe(data =>
      console.log(data)
    );
  }

  getSavedRecipes() {
    // const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    // return storedRecipes;
  }

  removeSavedRecipe(recipeUri) {
    // const storedRecipes = this.getSavedRecipes();
    // const filteredRecipesArr = storedRecipes.filter(recipe => 
    //   recipe.uri !== recipeUri
    // );
    // localStorage.setItem('recipes', JSON.stringify(filteredRecipesArr));
  }

}
