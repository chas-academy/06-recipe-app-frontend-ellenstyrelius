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
  // recipes: Array<Object>;
  healthLabels: any;
  dietLabels: any;
  isLoading: boolean;

  constructor(private recipesService: RecipesService, private savedRecipesService: SavedRecipesService) {
    this.dietLabels = ['vegetarian', 'vegan', 'sugar-conscious', 'alcohol-free', 'peanut-free', 'tree-nut-free', 'low-carb', 'low-fat', 'high-protein'];
  }

  handleSearch = (form: NgForm) => {
    this.isLoading = true;
    const dietSelections = this.handleDietSelections(form);
    const input = form.value.search;
    const apiRequest = this.recipesService.recipeSearch(input, dietSelections);
    apiRequest.subscribe(data => {
      this.recipes = data;
      ////////////////
      console.log('🐐: RecipesComponent -> handleSearch -> this.recipes', this.recipes)
      this.isLoading = false;
    });
  }

  handleDietSelections = (form: NgForm) => {
    const diet = [];
    for (let key in form.value) {
      if (form.value[key] === true ) {
        diet.push(key);
      }
    }
    ////////////////////////
    console.log('🐐: RecipesComponent -> handleDietSelections -> diet', diet)
    return diet;
  }

  handleSaveRecipe = (recipeDetails) => {
    this.savedRecipesService.saveRecipe(recipeDetails);
  }

  ngOnInit() {
  }
}
