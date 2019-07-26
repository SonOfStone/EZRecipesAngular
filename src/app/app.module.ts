import { ListComponent } from './components/list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PantryComponent } from './components/pantry/pantry.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { HomeComponent2 } from './classes/home/home.component';
import { RecipeSearchPageComponent } from './components/recipe-search-page/recipe-search-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PantryComponent,
    HomeComponent,
    HomeComponent2,
    ListComponent,
    LoginComponent,
    RecipeSearchPageComponent,
    PantryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
