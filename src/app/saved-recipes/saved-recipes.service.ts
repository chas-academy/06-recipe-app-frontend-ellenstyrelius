import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedRecipesService {

  constructor() { }

  saveRecipe(recipeDetails) {
    const storedRecipes = this.getSavedRecipes();
    const recipesArr = storedRecipes && storedRecipes.length ? storedRecipes : [];
    recipesArr.unshift(recipeDetails);
    localStorage.setItem('recipes', JSON.stringify(recipesArr));
  }

  getSavedRecipes() {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    return storedRecipes;
  }

  removeSavedRecipe(recipeUri) {
    const storedRecipes = this.getSavedRecipes();
    const filteredRecipesArr = storedRecipes.filter(recipe => 
      recipe.uri !== recipeUri
    );
    localStorage.setItem('recipes', JSON.stringify(filteredRecipesArr));
  }

}
