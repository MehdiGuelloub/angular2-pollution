import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { PublicationObject } from './publication-object';
import { PublicationCrudService } from '../publication-crud.service';
import { Auth } from '../auth-service.service';
import { User } from '../user';

@Component({
	selector: 'mg-publications',
	templateUrl: './publications.component.html',
	providers: [PublicationCrudService, Auth]
})
export class PublicationsComponent implements OnInit {
	publicationsList: PublicationObject[] = [];

	constructor(private auth:Auth, private crudService:PublicationCrudService) {
	}
	
	ngOnInit() {
		this.update();
	}

	update() {
		this.publicationsList = [];
		this.crudService.getAllPublications()
			.subscribe(
				(data: any) => {
					for (let d of data) {
						this.publicationsList.push(new PublicationObject(d.pubid, d.title, d.pic, new User(d.name, d.image), +d.latitude, +d.longitude));
					}
				}
			);
	}
}
