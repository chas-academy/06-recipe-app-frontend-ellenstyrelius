import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  recipeSearch() {
    return console.log('Hey this is RecipesService :)');
  }
}
