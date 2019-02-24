import { Component, OnInit } from '@angular/core';

import { SavedRecipesService } from './saved-recipes.service';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {
  savedRecipes: any;

  constructor(private savedRecipesService: SavedRecipesService) { 
    this.getSavedRecipesList();
  }

  getSavedRecipesList = () => {
    this.savedRecipes = this.savedRecipesService.getSavedRecipes();
  }

  removeRecipe = (recipeUri) => {
    this.savedRecipesService.removeSavedRecipe(recipeUri);
    this.getSavedRecipesList();
  }

  removeAllRecipes = () => {
    localStorage.clear();
    this.getSavedRecipesList();
  }

  ngOnInit() {
  }

}
