import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RecipesComponent },
  { path: 'recipes', pathMatch: 'full', component: RecipesComponent },
  { path: 'recipes/:id', pathMatch: 'full', component: RecipeDetailComponent },
  { path: 'saved/:id', /*canActivate: [Guard],*/ pathMatch: 'full', component: SavedRecipesComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
