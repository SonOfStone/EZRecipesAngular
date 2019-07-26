import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../classes/user';

//set these headers later on referenced in postIngredient
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient ) { }

  //change the url
  postUrl: string = "http://localhost:8080/EZRecipes/api/user/login/";

  login(user: User): Observable<User>{
    // need to change httpOptions
    return this.http.post<User>(this.postUrl, user, httpOptions)
    .pipe();
  }


  private loggedin:boolean = false;
  private userId:number = 0;

  toggleLoggedIn(){
    this.loggedin = !this.loggedin;
  }

  isLoggedIn(){
    return this.loggedin;
  }

  getUserId(){
    return this.userId
  }

  setUserId(userId:number){
    this.userId = userId;
  }
}
