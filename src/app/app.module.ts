import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { LoginComponent } from './Pages/login/login.component';
import { HttpClientModule } from '@angular/common/http'
 

const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
