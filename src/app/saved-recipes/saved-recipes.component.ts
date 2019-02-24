import { Component, OnInit } from '@angular/core';

import { SavedRecipesService } from './saved-recipes.service';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

  constructor(savedRecipesService: SavedRecipesService) { 
    const savedRecipes = savedRecipesService.getSavedRecipes();
    console.log(savedRecipes);
  }

  ngOnInit() {
  }

}
