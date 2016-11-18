import { Component, OnInit } from '@angular/core';
import { Auth } from './auth-service.service';

@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
	profile: any;

	constructor(private auth:Auth) {
		this.profile = JSON.parse(localStorage.getItem('profile'));
	}

	ngOnInit() {
	}

}
