import { Component, OnInit } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { HttpservService } from 'src/app/services/httpserv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
brews: Object;
  the1stingrediant: any;
  the4stingrediant: any;
  the3stingrediant: any;
  the2stingrediant: any;
  the5stingrediant: any;
  the6stingrediant: any;
  the7stingrediant: any;
  the8stingrediant: any;
  constructor(private http:HttpservService) { }
  rname:any;
theId:any;
thename:any;
theinstructionstocook:any;
theimagesyouuse:any;

  ngOnInit() {console.log("You are in the Rinit stage");
 console.log(this.rname);
    var theId;
    console.log("her is the homename value"+HomeComponent.homename);
  
    this.http.mymethod2(HomeComponent.homename).subscribe(
    data=>{
      
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
 console.log(theId);
 console.log('You know where you are'+HomeComponent.homename);



 
    //     console.log("this is before the element");
    
         console.log(name);
    //     console.log("this is after the element");
    // 
      
  
  }



    );
   
  }
  countClick(){
    console.log("I have been clicked");
    console.log(this.rname);
    this.http.mymethod(this.rname).subscribe(
      data=>{
        
        this.brews=data;
        console.log(this.brews);
        console.log(this.brews.meals[0].idMeal);
   this.theId=this.brews.meals[0].idMeal;
   this.theinstructionstocook=this.brews.meals[0].strInstructions;
   console.log(HomeComponent.homename);
   console.log(this.theId);
  
  
  
   
      //     console.log("this is before the element");
      
           console.log(name);
      //     console.log("this is after the element");
      // 
        
    
    }
  
  
  
      );
    
    }
}
