import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class BlogueurService {

  constructor(private http: Http) { }

  getAllBlogueurs() {
  	return this.http.get('http://pollution-blog.app/api/blogueur');
  }

  getById(id: string) {
  	return this.http.get('http://pollution-blog.app/api/blogueur/' + id);
  }

  getByMail(mail: string) {
  	return this.http.get('http://pollution-blog.app/api/blogueur/mail/' + mail);
  }

  addBlogueur(id:string, name:string, imagePath:string, email:string) {
	let urlSearchParams = new URLSearchParams();
	urlSearchParams.set('id', id);
	urlSearchParams.set('name', name);
	urlSearchParams.set('image', imagePath);
	urlSearchParams.set('email', email);

  	console.log(urlSearchParams);
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://pollution-blog.app/api/blogueur',
    					 urlSearchParams,
    					 {headers: headers});
  }

}
