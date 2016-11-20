import { Component, OnInit } from '@angular/core';
import { PublicationObject } from './publication-object';
import { User } from '../user';

@Component({
	selector: 'mg-publications',
	templateUrl: './publications.component.html',
})
export class PublicationsComponent implements OnInit {
	publicationsList: PublicationObject[] = [];

	constructor() {
		this.publicationsList.push(new PublicationObject('description ', 'fileUrl', new User('Ahmed Hedhili', ''), 0, 0));
	}
	
	ngOnInit() {
	}
}
