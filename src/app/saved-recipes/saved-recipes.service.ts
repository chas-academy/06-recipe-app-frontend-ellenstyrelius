import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedRecipesService {

  constructor() { }

  saveRecipe(recipeDetails) {
    let storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    const recipesArr = [];
    recipesArr.push(recipeDetails);
    if (storedRecipes) {
      storedRecipes.forEach(object => {
        recipesArr.push(object);
      });
    }
    
    console.log(recipesArr);

    localStorage.setItem('recipes', JSON.stringify(recipesArr));
  }

  getSavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes'));
    return savedRecipes;
  }

}
