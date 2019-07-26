import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantryComponent } from './components/pantry/pantry.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent2 } from './classes/home/home.component';
import { ListComponent } from './components/list/list.component';
import { RecipeSearchPageComponent } from './components/recipe-search-page/recipe-search-page.component';


const routes: Routes = [
  {
    component: PantryComponent,
    path: "pantry"
  },
  {
    component: HomeComponent2,
    path: "newhome"
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
  component: HomeComponent,
  path: "home"
  },
  {
  component: ListComponent,
  path: "newList"
  },
  {
  component:RecipeSearchPageComponent ,
  path: "newRecipe"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
