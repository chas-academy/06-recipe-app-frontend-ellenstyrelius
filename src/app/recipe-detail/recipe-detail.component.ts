import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeId: any;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) {
    this.recipeId = this.route.snapshot.params.id;
    console.log(this.recipeId);
  }

  getRecipeDetails = () => {
    const apiRequest = this.recipesService.recipeDetailSearch(this.recipeId);
  }

  ngOnInit() {
    this.getRecipeDetails();
  }
  
}
