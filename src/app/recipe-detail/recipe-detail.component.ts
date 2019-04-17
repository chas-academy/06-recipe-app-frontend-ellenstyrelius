import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../recipes/recipes.service';
import { SavedRecipesService } from '../saved-recipes/saved-recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails: any;

  constructor(private recipesService: RecipesService, private savedRecipesService: SavedRecipesService) {
    this.getRecipeDetails();
  }

  getRecipeDetails = () => {
    const recipeId = location.pathname.slice(9);

    const apiRequest = this.recipesService.recipeDetailSearch(recipeId);
    apiRequest.subscribe(data => {
      this.recipeDetails = data;
    });
  }

  handleSaveRecipe = (recipeDetails) => {
    this.savedRecipesService.saveRecipe(recipeDetails);
  }

  ngOnInit() {
  }
  
}
