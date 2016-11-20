import { Component, OnInit } from '@angular/core';
import { Auth } from './auth-service.service';

@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

	constructor(private auth:Auth) {
	}

	ngOnInit() {
	}

	get profile() {
		return JSON.parse(localStorage.getItem('profile'));
	}

}
