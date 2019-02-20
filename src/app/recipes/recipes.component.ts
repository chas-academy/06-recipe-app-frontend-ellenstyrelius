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
  recipeIds: any;

  constructor(private recipesService: RecipesService) {}

  handleSearch = (form: NgForm) => {
    const input = form.value.search;

    const apiRequest = this.recipesService.recipeSearch(input);

    apiRequest.subscribe(data => {
        this.recipesCollection = data.hits;

        this.recipes = this.recipesCollection.map(hit => hit.recipe);
        
        console.log(this.recipes);

        // this.recipeIds = this.recipes.map(recipe => recipe.uri.slice(51));
        
        // console.log(this.recipeIds);
      });
    
  }

  ngOnInit() {
  }

}
