import { Component } from '@angular/core';
import { Auth } from './auth-service.service';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(private auth:Auth) { }
}
