import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(private ls:LoginService) { }

  private userid:number;
  private user:User = new User('', '');

  ngOnInit() {
  }

  loginUser(){
    console.log(this.user);
    this.login(this.user);
  }

  //on form change post new ingredient
  login(user:User){
    this.ls.login(user).subscribe(userid => this.user = userid);
  }
}
