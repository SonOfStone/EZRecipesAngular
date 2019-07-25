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
  

  //define lists for form
  protein:Ingredient[] = [new Ingredient(0, null, "None"), new Ingredient(2, "protein", "egg"), new Ingredient(4, "protein", "chicken")];
  vegetable = ['None', 'Brocolli', 'Asparagus', 'Cucumber'];

  ngOnInit() {
    this.getCurrentIngredients(this.userId);
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
    console.log(value as Ingredient);
    value = <Ingredient> value;
    console.log(value);
    if(value.name != "None"){
      this.ps.postIngredient(value).subscribe(ingredient => this.ingredients.push(ingredient));
    }
  }
}
