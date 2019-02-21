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

  constructor(private recipesService: RecipesService) {
    this.healthLabels = ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'peanut-free', 'soy-free', 'alcohol-free', 'low-sugar' ];
  }

  handleSearch = (form: NgForm) => {
    const input = form.value.search;

    const apiRequest = this.recipesService.recipeSearch(input);

    apiRequest.subscribe(data => {
        this.recipesCollection = data.hits;

        this.recipes = this.recipesCollection.map(hit => hit.recipe);
        
        console.log(this.recipes);

      });
    
  }

  ngOnInit() {
  }

}
