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
 
    console.log(recipesArr);

    localStorage.setItem('recipes', JSON.stringify(recipesArr));
  }

  getSavedRecipes() {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    return storedRecipes;
  }

  removeSavedRecipe(recipeIndex) {
    console.log(recipeIndex);

    const storedRecipes = this.getSavedRecipes();
    console.log(storedRecipes);

    const recipesArr = storedRecipes;
    //recipesArr.
    // remove item with index recipeIndex from array

    localStorage.removeItem(recipeIndex);
  }

}
