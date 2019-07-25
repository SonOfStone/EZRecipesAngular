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
  showCurrentIngredients(){
    for(let i = 0; i <= this.ingredients.length; i++){

    }
  }
}
