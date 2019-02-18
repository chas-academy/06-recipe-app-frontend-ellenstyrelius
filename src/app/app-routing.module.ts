import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path : '', redirectTo: '/recipes', pathMatch: 'full' },
  { path : 'recipes', component: RecipesComponent },
  { path : 'recipes/:id', component: RecipeDetailComponent },
  { path : 'saved/:id', component: SavedRecipesComponent },
  { path : '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
