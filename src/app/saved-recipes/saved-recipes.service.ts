import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedRecipesService {

  constructor() { }

  saveRecipe(recipeDetails) {
    localStorage.setItem('recipe', JSON.stringify(recipeDetails));
  }

  getSavedRecipe() {
    const savedRecipe = JSON.parse(localStorage.getItem('recipe'));
    return savedRecipe;
  }

}
