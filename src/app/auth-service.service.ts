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
      	});

      	this.lock.hide();
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  };
}