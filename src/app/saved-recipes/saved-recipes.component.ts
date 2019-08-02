import { Component, OnInit } from '@angular/core';

import { SavedRecipesService } from './saved-recipes.service';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {
  savedRecipes: any;
  isLoading: boolean = true;

  constructor(private savedRecipesService: SavedRecipesService) { 
    this.getSavedRecipesList();
  }

  getSavedRecipesList = () => {
    const request = this.savedRecipesService.getSavedRecipes();
    request.subscribe(data => {
      this.savedRecipes = data;
      this.isLoading = false;
    }
    );
  }

  removeRecipe = (recipeId) => {
    const request = this.savedRecipesService.removeSavedRecipe(recipeId);
    request.subscribe(data => {
      return data;
    },
      err => err,
      () => this.getSavedRecipesList()
    );
  }

  removeAllRecipes = () => {
    const request = this.savedRecipesService.removeAll();
    request.subscribe(data =>
    console.log('🐐: SavedRecipesComponent -> removeAllRecipes -> data', data),
      err => err,
      () => this.getSavedRecipesList()
    )
  }

  ngOnInit() {
  }

}
