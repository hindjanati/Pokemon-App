import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(userName: string, password: string): Observable<boolean> {
    const isLoggedIn = (userName == 'runningman' && password == 'runningman');
    return of(isLoggedIn).pipe(
    delay(1000),
    tap((isLoggedIn) => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(){
    this.isLoggedIn = false;
  }
}
