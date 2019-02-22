import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../recipes/recipes.service';
import { SavedRecipesService } from '../saved-recipes/saved-recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeId: any;
  recipeDetails: any;

  constructor(private recipesService: RecipesService, private savedRecipesService: SavedRecipesService) {
    this.recipeId = location.pathname.slice(-32);

    this.getRecipeDetails();
  }

  getRecipeDetails = () => {
    const apiRequest = this.recipesService.recipeDetailSearch(this.recipeId);

    apiRequest.subscribe(data => {
      this.recipeDetails = data[0];
    });
  }

  handleSaveRecipe = (recipeDetails) => {
    recipeDetails = this.recipeDetails;

    alert('recipe saved!');

    this.savedRecipesService.saveRecipe(recipeDetails);

  }

  ngOnInit() {
  }
  
}
