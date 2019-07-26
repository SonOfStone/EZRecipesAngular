import { Component, OnInit } from '@angular/core';


import { analyzeAndValidateNgModules } from '@angular/compiler';

import { HttpservService } from 'src/app/services/httpserv.service';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-recipe-search-page',
  templateUrl: './recipe-search-page.component.html',
  styleUrls: ['./recipe-search-page.component.css']
})
export class RecipeSearchPageComponent implements OnInit {
  hol1:any;
 hol2:any;
  hol3:any;
  actuallook: any;
  static thename(thename: any, any: any) {
    throw new Error("Method not implemented.");
  }
 name:any;
   //static _homename = "chicken";
  static get homename() {
    return HomeComponent._homename;
  }
  static set homename(value) {
    HomeComponent._homename = value;
  }
clickcounter:number=0;
 

countClick(){
console.log("I have been clicked");
this.clickcounter++;
HomeComponent.homename=this.name;
console.log(HomeComponent._homename);
this.ngOnInit();
}














brews: any;
brews2: any;
brews3: any;
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

static holder:any;
ngOnInit() {console.log("You are in the Rinit stage");
console.log(this.rname);
  var theId;

  //here is where we seek the pantry
  this.http.mymethod3(HomeComponent.homename).subscribe(
    data=>{
      
      this.brews=data;
      actuallook:Object;
      console.log('here is a pantry item'+this.brews);
      this.hol1=this.brews[0].name;
       this.hol2=this.brews[1].name;
      this.hol3=this.brews[2].name;
      console.log(this.hol1+this.hol2+this.hol3);
      for(let i=0;i<this.brews.length;i++){//we now parse the individual data
        console.log("this is the pantry name we are looking at"+this.brews[i].name);
        RecipeSearchPageComponent.holder=this.brews[i].name;
        console.log(this.brews[i].name);





        // this.http.mymethod(this.brews[i].name).subscribe(
        //   data=>{this.brews2=data;
        //     console.log("You have found the whole object");
        //     console.log(data.meals[0].idMeal+" pantry");
        //     console.log("Here is what we get for the dataon an iteration pantry");
        //   //console.log(data[0].idMeal);
        //   var newnum:number;
        //  newnum=data.meals[0].idMeal;
        //   console.log("You got the number")
        //   console.log(newnum);
          
          

        //   if(newnum>100){
        //     console.log("pantyr is in a final check"+RecipeSearchPageComponent.holder);
        //      var wor:any;
             
        //     // console.log("this is the values of the wor"+wor);
        //     HomeComponent.homename=RecipeSearchPageComponent.holder;
        //     this.name=RecipeSearchPageComponent.holder;
        //     console.log('Here is the pantry item we are gonna set'+HomeComponent.homename);


        //   }
          
        //   }
        // );

        
        
      }
      console.log("thisis what we get for the pantry choice"+HomeComponent.homename);

    });



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
  checker(checker: any) {
    throw new Error("Method not implemented.");
  }
countClick1(){
  console.log("I have been clicked");
  console.log(this.brews.meals[0].idMeal);
  //console.log(this.rname);
  HomeComponent.homename=this.brews.meals[0].idMeal;
  //this.http.mymethod(this.rname).subscribe();

  }
  countClick2(){
    console.log("I have been clicked on 2");
    console.log(this.brews.meals[1].idMeal);
    HomeComponent.homename=this.brews.meals[1].idMeal;
    
  
    }
    countClick3(){
      console.log("I have been clicked on 3");
      console.log(this.brews.meals[2].idMeal);
      HomeComponent.homename=this.brews.meals[2].idMeal;
      //this.http.mymethod(this.rname).subscribe();
    
      }
      countClick4(){
        console.log("I have been clicked");
        console.log(this.brews.meals[0].idMeal);
        //console.log(this.rname);
        HomeComponent.homename=this.hol1;
        console.log("this is the value of home component for count click 4"+HomeComponent.homename);
        //this.http.mymethod(this.rname).subscribe();
        this.name=this.hol1;
        }
        countClick5(){
          console.log("I have been clicked on 2");
          console.log(this.brews.meals[1].idMeal);
          
          HomeComponent.homename=this.hol2;
          console.log("this is the value of home component for count click 5"+HomeComponent.homename);
          this.name=this.hol2
        
          }
          countClick6(){
            console.log("I have been clicked on 3");
            console.log(this.brews.meals[2].idMeal);
            HomeComponent.homename=this.hol3;
            console.log("this is the value of home component for count click 6"+HomeComponent.homename);
            //this.http.mymethod(this.rname).subscribe();
            this.name=this.hol3
            }

}
