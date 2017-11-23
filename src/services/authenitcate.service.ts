import { Injectable } from '@angular/core';
import { User } from "./user";
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions} from '@angular/http';
import { JwtHelper } from 'angular2-jwt';

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthenticateService {
  public token: string;
  public jwtHelper: JwtHelper = new JwtHelper();

  constructor(
      private router: Router,
      private http: Http,
    ) { 
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;
     }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  login(user) {
    let loginPayload = {
        username: user.username,
        password: user.password
    };

    let bodyString = JSON.stringify(loginPayload); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.router.url, bodyString, options) // ...using post request
        .map(res => {
          // login successful if there's a jwt token in the response
          let token = res.json() && res.json().token;
          if (token) {
              // set token property
              this.token = token;

              // store username and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: token }));

              // return true to indicate successful login
              return true;
          } else {
              // return false to indicate failed login
              return false;
          }
        })
        .catch((error:any) => Observable.throw('Invalid Username Or Password')) //...errors if
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null){
      this.router.navigate(['/login']);
    }
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');
    // Check whether the token is expired and return
    // true or false
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    } else return false;
  }

}