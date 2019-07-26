import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/classes/user';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(private ls:LoginService, private router:Router) { }

  private userId:number;
  private user:User = new User(0,'', '');

  ngOnInit() {
  }

  loginUser(){
    console.log(this.user);
    this.login(this.user);
  }

  //on form change post new ingredient
  login(user:User){
    this.ls.login(user).subscribe(response => {
      if(response as unknown as number != null){
        this.ls.toggleLoggedIn();
        this.ls.setUserId(response as unknown as number)
      }
      console.log(this.ls.getUserId())
      if(this.ls.getUserId() != 0){
        this.router.navigate(['/home'])
      }
    });
  }
}
