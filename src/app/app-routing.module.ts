import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './pages/recipes/recipes.module#RecipesPageModule' },
  { path: 'recipes/:id', loadChildren: './pages/recipe-details/recipe-details.module#RecipeDetailsPageModule' }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }