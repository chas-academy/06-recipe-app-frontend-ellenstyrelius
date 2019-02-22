import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipesCollection: any;
  recipes: any;
  healthLabels: any;
  dietLabels: any;
  dietSelection: any;

  constructor(private recipesService: RecipesService) {
    this.healthLabels = ['peanut-free', 'sugar-conscious', 'alcohol-free', 'tree-nut-free'];
    this.dietLabels = ['low-carb', 'low-fat', 'high-protein'];
  }

  handleSearch = (form: NgForm) => {

    this.handleDietSelection(form);

    // console.log(this.dietSelection);

    const input = form.value.search;

    const apiRequest = this.recipesService.recipeSearch(input, this.dietSelection);

    apiRequest.subscribe(data => {
        this.recipesCollection = data.hits;

        this.recipes = this.recipesCollection.map(hit => hit.recipe);
        
        console.log("recipes:", this.recipes);

      });
    
  }

  handleDietSelection = (form: NgForm) => {
    
    this.dietSelection = [];
    
    for (let value in form.value) {
      if (form.value[value] === true) {
        this.dietSelection.push(value);
      }
    }

  }

  ngOnInit() {
  }

}
