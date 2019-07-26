import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ingredient } from '../classes/ingredient';
import { LoginService } from './login.service';


//set these headers later on referenced in postIngredient
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PantryWebService {
  //need to change these
  postUrl: string = "http://localhost:8080/EZRecipes/api/user/pantry/update/";
  deleteUrl: string = "http://localhost:8080/EZRecipes/api/user/pantry/delete/"
  getUrl: string = "http://localhost:8080/EZRecipes/api/user/pantry/"
  getAllIngredientsUrl: string = "http://localhost:8080/EZRecipes/api/ingredient/all"

  constructor(private http:HttpClient, private ls:LoginService) { 
  }


  
  //used to post an ingredient when selected
  postIngredient(ingredient: Ingredient): Observable<Ingredient>{
    console.log(ingredient);
    // need to change httpOptions
    return this.http.post<Ingredient>(this.postUrl + this.ls.getUserId(), ingredient, httpOptions)
    .pipe();
  }

  getCurrentIngredients(){
    return this.http.get(this.getUrl + this.ls.getUserId())
  }

  getAllIngredients(){
    return this.http.get(this.getAllIngredientsUrl)
  }

  deleteIngredient(ingredient: Ingredient): Observable<Ingredient>{
    console.log(ingredient);
    // need to change httpOptions
    return this.http.post<Ingredient>(this.deleteUrl + this.ls.getUserId(), ingredient, httpOptions)
    .pipe(); 
  }
}
