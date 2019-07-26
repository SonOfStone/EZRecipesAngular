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
  private ingredients:Ingredient[] = [];
  private allIngredients:Ingredient[];
  

  //define lists for form
  protein:Ingredient[] = [new Ingredient(0, null, "Protein")];
  vegetable:Ingredient[] = [new Ingredient(0, null, "Vegetable")];
  fruit:Ingredient[] = [new Ingredient(0, null, "Fruit")];
  grain:Ingredient[] = [new Ingredient(0, null, "Grain")];
  dairy:Ingredient[] = [new Ingredient(0, null, "Dairy")];

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
        var returnedIngredients = data as Ingredient[];
        for(var i=0; i < returnedIngredients.length; i++){
          this.ingredients.push(new Ingredient(returnedIngredients[i].ingredientId, returnedIngredients[i].category, returnedIngredients[i].name));
        }
        console.log(this.ingredients);
      }
    )
  }

  //on form change post new ingredient
  postIngredient(value){
    value = <Ingredient> value;
    var obj:any = JSON.parse(value);
    if(obj.ingredientId != 0){
      this.ps.postIngredient(value).subscribe(ingredient => this.ingredients.push(new Ingredient(ingredient.ingredientId, ingredient.category, ingredient.name)));
    }
  }

  deleteIngredient(value){
    console.log(value);
    value = <Ingredient> value;
    this.ps.deleteIngredient(value).subscribe(ingredient => {
      var index = 0;
      for(var i=0; i < this.ingredients.length; i++){
        if(ingredient.name == this.ingredients[i].name){
          index = i;
        }
      }
      this.ingredients.splice(index, 1)})
  }
}
