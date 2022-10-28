import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AutService } from './aut.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private service: AutService,
    private route: Router
    ){}

  canActivate(){

    if(this.service.isLoggedIn){
      return true;
    }

    this.route.navigate(['/login'])
    return false;
  }
  
}
