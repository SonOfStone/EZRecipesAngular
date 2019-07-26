import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  static thename(thename: any, any: any) {
    throw new Error("Method not implemented.");
  }
 name="testghkhg";
   static _homename = "chicken";
  static get homename() {
    return HomeComponent._homename;
  }
  static set homename(value) {
    HomeComponent._homename = value;
  }
clickcounter:number=0;
  constructor() { }

  ngOnInit() {
  }
countClick(){
console.log("I have been clicked");
this.clickcounter++;
  HomeComponent.homename=this.name;
}
}
