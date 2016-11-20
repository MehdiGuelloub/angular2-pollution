import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('LctLaNAejFFxaMdLKfeKWBYrPJBnrIH9', 'mohamedmehdigloub.eu.auth0.com', {});

  constructor() {
    this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
          if (error) {
            console.log(error);
          }
          localStorage.setItem('profile', JSON.stringify(profile));
          /*this.saveIfNewUser();*/
        });
      	this.lock.hide();
    });
  }

  public login() {
    this.lock.show();
  };

  public authenticated() {
    return tokenNotExpired();
  };

  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  };

  public saveIfNewUser(){
    alert(55);
  }
}