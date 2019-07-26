import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {


  loggedin:boolean = false;
  userId:number;
  loginService:LoginService

  constructor(loginService:LoginService) { 
    this.loginService = loginService;
    console.log(this.userId)
    if(this.userId != 0){
      this.loggedin = true;
    }
  }

  isLoggedIn(){
    return this.loginService.isLoggedIn();
  }


  ngOnInit() {
  }



}
