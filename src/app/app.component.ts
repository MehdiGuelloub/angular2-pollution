import { Component } from '@angular/core';
import { Auth } from './auth-service.service';
import { BlogueurService } from './blogueur.service';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  providers: [Auth, BlogueurService]
})
export class AppComponent {
	constructor(private auth:Auth) { }
}
