import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { NgForm } from '@angular/forms';

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
      })
      ;
      
    
  }

  ngOnInit() {
  }

}
