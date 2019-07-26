import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { RealhomeComponent } from './realhome/realhome.component';
import { DisplaypageComponent } from './displaypage/displaypage.component';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'list',component:ListComponent},
{path:'realhome',component:RealhomeComponent},
{path:'DisplaypageComponent',component:DisplaypageComponent},
{path:'RecipeSearchPageComponent',component:RecipeSearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
