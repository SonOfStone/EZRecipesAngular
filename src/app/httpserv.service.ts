import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpservService {

  constructor(private http:HttpClient ) { }

mymethod(){
  console.log(this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'));
return this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');


}

}
