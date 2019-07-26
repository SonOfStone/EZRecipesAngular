import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HttpservService } from 'src/app/services/httpserv.service';

@Component({
  selector: 'app-displaypage',
  templateUrl: './displaypage.component.html',
  styleUrls: ['./displaypage.component.css']
})
export class DisplaypageComponent implements OnInit {

  brews: Object;
  the1stingrediant: any;
  the4stingrediant: any;
  the3stingrediant: any;
  the2stingrediant: any;
  the5stingrediant: any;
  the6stingrediant: any;
  the7stingrediant: any;
  the8stingrediant: any;
  theId1: any;
  theinstructionstocook1: any;
  theimagesyouuse1: any;
  the2stingrediant1: any;
  the3stingrediant1: any;
  the1stingrediant1: any;
  the5stingrediant1: any;
  the4stingrediant1: any;
  the6stingrediant1: any;
  the7stingrediant1: any;
  the8stingrediant1: any;
  theId2: any;
  theinstructionstocook2: any;
  theimagesyouuse2: any;
  the2stingrediant2: any;
  the4stingrediant2: any;
  the1stingrediant2: any;
  the5stingrediant2: any;
  the7stingrediant2: any;
  the8stingrediant2: any;
  the6stingrediant2: any;
  the3stingrediant2: any;
  constructor(private http:HttpservService) { }
  rname:any;
theId:any;
thename:any;
theinstructionstocook:any;
theimagesyouuse:any;
meals:any;
  ngOnInit() {console.log("You are in the Rinit stage");
 console.log(this.rname);
    var theId;
    console.log("her is the homename value"+HomeComponent.homename);
  
    this.http.mymethod(HomeComponent.homename).subscribe(
    data=>{
      console.log("Here is the realfirst get requests");
      this.brews=data;
      console.log(this.brews);
      console.log(this.brews.meals[0].idMeal);

 this.theId=this.brews.meals[0].idMeal;
 this.theinstructionstocook=this.brews.meals[0].strInstructions;
 this.theimagesyouuse=this.brews.meals[0].strMealThumb;
 this.the1stingrediant=this.brews.meals[0].strIngredient1;
 this.the2stingrediant=this.brews.meals[0].strIngredient2;
 this.the3stingrediant=this.brews.meals[0].strIngredient3;
 this.the4stingrediant=this.brews.meals[0].strIngredient4;
 this.the5stingrediant=this.brews.meals[0].strIngredient5;
 this.the6stingrediant=this.brews.meals[0].strIngredient6;
 this.the7stingrediant=this.brews.meals[0].strIngredient7;
 this.the8stingrediant=this.brews.meals[0].strIngredient8;
 console.log("Here is the actual id of the second meal");
 console.log(this.brews.meals[1].idMeal);
 this.theId1=this.brews.meals[1].idMeal;
 this.theinstructionstocook1=this.brews.meals[1].strInstructions;
 this.theimagesyouuse1=this.brews.meals[1].strMealThumb;
 this.the1stingrediant1=this.brews.meals[1].strIngredient1;
 this.the2stingrediant1=this.brews.meals[1].strIngredient2;
 this.the3stingrediant1=this.brews.meals[1].strIngredient3;
 this.the4stingrediant1=this.brews.meals[1].strIngredient4;
 this.the5stingrediant1=this.brews.meals[1].strIngredient5;
 this.the6stingrediant1=this.brews.meals[1].strIngredient6;
 this.the7stingrediant1=this.brews.meals[1].strIngredient7;
 this.the8stingrediant1=this.brews.meals[1].strIngredient8;

 console.log("Here is the actual id of the 3rd meal");
 console.log(this.brews.meals[2].idMeal);
 this.theId2=this.brews.meals[2].idMeal;
 this.theinstructionstocook2=this.brews.meals[2].strInstructions;
 this.theimagesyouuse2=this.brews.meals[2].strMealThumb;
 this.the1stingrediant2=this.brews.meals[2].strIngredient1;
 this.the2stingrediant2=this.brews.meals[2].strIngredient2;
 this.the3stingrediant2=this.brews.meals[2].strIngredient3;
 this.the4stingrediant2=this.brews.meals[2].strIngredient4;
 this.the5stingrediant2=this.brews.meals[2].strIngredient5;
 this.the6stingrediant2=this.brews.meals[2].strIngredient6;
 this.the7stingrediant2=this.brews.meals[2].strIngredient7;
 this.the8stingrediant2=this.brews.meals[2].strIngredient8;
  
    }
      );
    this.http.mymethod(HomeComponent.homename).subscribe(
      data=>{
        console.log("Here is the first get requests");
    }
    
  
      );
      this.http.mymethod(HomeComponent.homename).subscribe(
        data=>{
          console.log("Here is the first get requests");
      }
      
        );
   
  }
  countClick1(){
    console.log("I have been clicked");
    console.log(this.rname);
    console.log(this.rname);
    HomeComponent.homename=this.brews.meals[0].idMeal;
    this.http.mymethod(this.rname).subscribe();
  
    }
    countClick2(){
      console.log("I have been clicked on 2");
      console.log(this.rname);
      HomeComponent.homename=this.brews.meals[1].idMeal;
      this.http.mymethod(this.rname).subscribe();
    
      }
      countClick3(){
        console.log("I have been clicked on 3");
        console.log(this.rname);
        HomeComponent.homename=this.brews.meals[2].idMeal;
        this.http.mymethod(this.rname).subscribe();
      
        }

}
