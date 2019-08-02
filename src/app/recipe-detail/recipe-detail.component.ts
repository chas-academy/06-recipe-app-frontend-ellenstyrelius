import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RecipesService } from '../recipes/recipes.service';
import { SavedRecipesService } from '../saved-recipes/saved-recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails: any;
  accessToken = localStorage.getItem('accessToken');

  constructor(
    private recipesService: RecipesService, 
    private savedRecipesService: SavedRecipesService, 
    private router: Router) {
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
    if (this.accessToken) {
      this.savedRecipesService.saveRecipe(recipeDetails);
    } else {
    this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }
  
}
