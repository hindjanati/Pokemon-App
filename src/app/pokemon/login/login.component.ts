import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutService } from 'src/app/aut.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  message: string = "You are log-out !";
  user: string;
  password: string;
  auth: AutService

  constructor(private serviceAut: AutService,
    private route: Router) { }

  ngOnInit(){
    this.auth = this.serviceAut;
  }

  login(){
    this.message = "Loading ..."
    this.serviceAut.login(this.user, this.password).subscribe(
      (isLoggedIn: boolean) => {
        this.setMessage();
        if(isLoggedIn){
          this.route.navigate(['/pokemons'])
        }
        else {
          this.password = '';
          this.route.navigate(['/login'])
        }
      }
    )
  }

  setMessage(){
    if(this.serviceAut.isLoggedIn){
      this.message = " You're connected "
    }
    else {
      this.message = " User or password false ! "
    }

  }
  logout(){
    this.serviceAut.logout();
    this.message = 'You are connected'
  }
}
