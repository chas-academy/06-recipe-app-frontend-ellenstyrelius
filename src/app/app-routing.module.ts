import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticatedUserService } from './authenticated-user-service';
import { NotAuthenticatedService } from './not-authenticated.service';

const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: RecipesComponent },
  { path: 'recipes/:id',
    component: RecipeDetailComponent },
  { path: 'login',
    component: LoginComponent },
  { path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthenticatedService] },
  { path: 'saved-recipes',
    component: SavedRecipesComponent,
    canActivate: [AuthenticatedUserService] },
  { path: '**',
    component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
