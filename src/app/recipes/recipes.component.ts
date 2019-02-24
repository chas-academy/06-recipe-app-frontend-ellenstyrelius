import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RecipesService } from './recipes.service';
import { SavedRecipesService } from '../saved-recipes/saved-recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: any;
  healthLabels: any;
  dietLabels: any;

  constructor(private recipesService: RecipesService, private savedRecipesService: SavedRecipesService) {
    this.healthLabels = ['peanut-free', 'sugar-conscious', 'alcohol-free', 'tree-nut-free'];
    this.dietLabels = ['low-carb', 'low-fat', 'high-protein'];
  }

  handleSearch = (form: NgForm) => {
    const dietSelections = this.handleDietSelections(form);
    const input = form.value.search;

    const apiRequest = this.recipesService.recipeSearch(input, dietSelections);
    apiRequest.subscribe(data => {
      const recipesCollection = data.hits;
      this.recipes = recipesCollection.map(hit => hit.recipe);
      ///////////////
      console.log("recipes:", this.recipes);
      //////////////
      });
  }

  handleDietSelections = (form: NgForm) => {
    const diet = [];
    for (let key in form.value) {
      if (form.value[key] === true ) {
        diet.push(key);
      }
    }
    return diet;
  }

  handleSaveRecipe = (recipeDetails) => {
    this.savedRecipesService.saveRecipe(recipeDetails);
  }

  ngOnInit() {
  }
}
