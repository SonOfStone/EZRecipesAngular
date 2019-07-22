import { Component, OnInit } from '@angular/core';
import { HttpservService } from '../httpserv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
brews: Object;
  constructor(private http:HttpservService) { }

  

  ngOnInit() {
    
    this.http.mymethod().subscribe(
    data=>{
      this.brews=data;
      console.log(this.brews);



    }



    );
  }

}
