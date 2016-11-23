import { Component, OnInit, Input } from '@angular/core';
import { PublicationObject } from './publication-object';
import { Auth } from '../auth-service.service';

@Component({
	selector: 'mg-one-publication',
	templateUrl: './one-publication.component.html',
	styles: []
})
export class OnePublicationComponent implements OnInit {

	nb_likes: number;
	nb_dislikes: number;
	nb_shares: number;
	liked: boolean;
	disliked: boolean;
	shared: boolean;
	mapStat: boolean = false;
	@Input() publication: PublicationObject;
	
	constructor(private auth:Auth) { 
		this.nb_likes = 0;
		this.nb_dislikes = 0;
		this.nb_shares = 0;
		this.liked = false;
		this.disliked = false;
		this.shared = false;
	}

	ngOnInit() {
	}

	public showMap() {
		this.mapStat = !this.mapStat;
	}

	public likeIt() {
		if(!this.liked) {
			this.liked = true;
			this.nb_likes++;
		} else {
			this.liked = false;
			this.nb_likes--;
		}
	}
	
	public dislikeIt() {
		if(!this.disliked) {
			this.disliked = true;
			this.nb_dislikes++;
		} else {
			this.disliked = false;
			this.nb_dislikes--;
		}
	}
	
	public shareIt() {
		if(!this.shared) {
			this.shared = true;
			this.nb_shares++;
		} else {
			this.shared = false;
			this.nb_shares--;
		}
	}

}
