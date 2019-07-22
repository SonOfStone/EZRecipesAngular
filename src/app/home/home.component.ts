import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
clickcounter:number=0;name="test";
  constructor() { }

  ngOnInit() {
  }
countClick(){
console.log("I have been clicked");
this.clickcounter++;

}
}
