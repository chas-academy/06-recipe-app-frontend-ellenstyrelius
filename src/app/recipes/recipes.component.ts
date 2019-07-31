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
  isLoading: boolean;

  constructor(private recipesService: RecipesService, private savedRecipesService: SavedRecipesService) {
    this.dietLabels = ['Vegetarian', 'Vegan', 'Sugar-Conscious', 'Alcohol-Free', 'Peanut-Free', 'Tree-Nut-Free', 'Low-Carb', 'Low-Fat', 'High-Protein'];
    this.deleteStoredRecipeSearch();
    this.getStoredRecipeSearch();
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
      this.recipesService.removeRecipeSearch();
      this.recipesService.storeRecipeSearch(this.recipes);
    }); 
  }

  ////// DO SOMETHING IF RESPONSE IS !200

  handleDietSelections = (form: NgForm) => {
    const diet = [];
    for (let key in form.value) {
      if (form.value[key] === true ) {
        diet.push(key);
      }
    }
    return diet;
  }

  getStoredRecipeSearch = () => {
    console.log(window.history.state.navigationId)

    this.recipes = this.recipesService.reloadRecipeSearch();
    
  }

  deleteStoredRecipeSearch = () => {
    if(window.history.state.navigationId === 1) {
      this.recipesService.removeRecipeSearch();
    }
  }

  handleSaveRecipe = (recipeDetails) => {
    this.savedRecipesService.saveRecipe(recipeDetails);
  }

  ngOnInit() {
  }
}
