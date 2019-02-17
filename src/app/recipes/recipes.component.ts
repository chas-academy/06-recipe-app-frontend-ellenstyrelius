import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: [];

  constructor(private recipesService: RecipesService) {}

  handleSearch = (form: NgForm) => {
    const input = form.value.search;

    this.recipesService.recipeSearch(input)
      .subscribe(data => {
        this.recipes = data.hits;
        console.log(this.recipes);
      });
      
  }

  ngOnInit() {
  }

}
