import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

import { BlogueurService } from './blogueur.service';


// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  lock = new Auth0Lock('LctLaNAejFFxaMdLKfeKWBYrPJBnrIH9', 'mohamedmehdigloub.eu.auth0.com', {
    theme: {
      logo: 'assets/user-profile.png',
      primaryColor: '#793939',
      language: 'fr',
      labeledSubmitButton: false
    } 
  });

  constructor(private blogueurService: BlogueurService) {
    this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
          if (error) {
            console.log(error);
          }
          localStorage.setItem('profile', JSON.stringify(profile));
          this.blogueurService.getByMail(profile.email)
                              .subscribe(
                                (data: any) => console.log(data),
                                () => {
                                   if(!profile.email) {
                                     profile.email = "No_EMAIL" + profile.user_id;
                                   }
                                   this.blogueurService.addBlogueur(profile.user_id, profile.name, profile.picture, profile.email)
                                                       .subscribe(
                                                          (data: any) => console.log(data),
                                                          (error: any) => console.log(error),
                                                        )
                                                         },
                              );
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