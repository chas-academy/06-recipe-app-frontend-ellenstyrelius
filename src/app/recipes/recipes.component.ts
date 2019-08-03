import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  accessToken = localStorage.getItem('accessToken');

  constructor(
    private recipesService: RecipesService, 
    private savedRecipesService: SavedRecipesService, 
    private router: Router) {
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
      this.isLoading = false;
      this.recipesService.removeRecipeSearch();
      this.recipesService.storeRecipeSearch(this.recipes);
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

  getStoredRecipeSearch = () => {
    this.recipes = this.recipesService.reloadRecipeSearch();
    
  }

  deleteStoredRecipeSearch = () => {
    if(window.history.state.navigationId === 1) {
      this.recipesService.removeRecipeSearch();
    }
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
