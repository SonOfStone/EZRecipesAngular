import { Component, OnInit } from '@angular/core';
import { PantryWebService } from 'src/app/services/pantry-web.service';
import { Ingredient } from 'src/app/classes/ingredient';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})



export class PantryComponent implements OnInit {

  constructor(private ps:PantryWebService) { }

  private userId:BigInteger;
  private ingredients:Ingredient[];
  private allIngredients:Ingredient[];
  

  //define lists for form
  // protein:Ingredient[] = [new Ingredient(0, null, "None"), new Ingredient(2, "protein", "egg"), new Ingredient(4, "protein", "chicken")];
  protein:Ingredient[] = [new Ingredient(0, null, "None")];
  vegetable:Ingredient[] = [new Ingredient(0, null, "None")];
  fruit:Ingredient[] = [new Ingredient(0, null, "None")];
  grain:Ingredient[] = [new Ingredient(0, null, "None")];
  dairy:Ingredient[] = [new Ingredient(0, null, "None")];

  ngOnInit() {
    this.populateFormIngredients();
    this.getCurrentIngredients(this.userId);
  }
  
  //grabs all the ingredients in db
  populateFormIngredients(){
    this.ps.getAllIngredients().subscribe(
      data => {
        this.allIngredients = data as any;
        console.log(this.allIngredients);
        for(var i=0; i < this.allIngredients.length; i++){
          let ingredient:Ingredient = new Ingredient(this.allIngredients[i].ingredientId, this.allIngredients[i].category, this.allIngredients[i].name);
          if(this.allIngredients[i].category == "protein"){
            this.protein.push(ingredient)
          }else if(this.allIngredients[i].category == "vegetable"){
            this.vegetable.push(ingredient)
          }else if(this.allIngredients[i].category == "fruit"){
            this.fruit.push(ingredient)
          }else if(this.allIngredients[i].category == "grain"){
            this.grain.push(ingredient)
          }else if(this.allIngredients[i].category == "dairy"){
            this.dairy.push(ingredient)
          }
        }
      }
    )
  }

  getCurrentIngredients(userid: any) {
    this.ps.getCurrentIngredients().subscribe(
      data => {
        this.ingredients = data as any;
        console.log(this.ingredients);
        // this.showCurrentIngredients;
      }
    )
  }

  //dont think i need this method
  // showCurrentIngredients(){
  //   for(let i = 0; i <= this.ingredients.length; i++){

  //   }
  // }


  //on form change post new ingredient
  postIngredient(value){
    value = <Ingredient> value;
    if(value.name != "None"){
      this.ps.postIngredient(value).subscribe(ingredient => this.ingredients.push(ingredient));
    }
  }
}
