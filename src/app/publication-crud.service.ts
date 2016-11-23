import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class PublicationCrudService {

  constructor(private http: Http) { }

  getAllPublications() {
  	return this.http.get('http://pollution-blog.app/api/publication')
  					.map((res: Response) => res.json());
  }

  getBloggerPublications(blogger_id:string) {
  	return this.http.get('http://pollution-blog.app/api/publication/' + blogger_id)
  					.map((res: Response) => res.json());
  }

  addPublication(title:string, image:string, longitude:string, latitude:string, blogueur_id:string) {
	let urlSearchParams = new URLSearchParams();
	urlSearchParams.set('title', title);
	urlSearchParams.set('image', image);
	urlSearchParams.set('longitude', longitude);
	urlSearchParams.set('latitude', latitude);
	urlSearchParams.set('blogueur_id', blogueur_id);

  	console.log(urlSearchParams);
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://pollution-blog.app/api/publication',
    					 urlSearchParams,
    					 {headers: headers});
  }

}