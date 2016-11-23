import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class CommentaireService {

  constructor(private http: Http) { }

  getCommentsByPublication(publication_id:string) {
  	return this.http.get('http://pollution-blog.app/api/commentaire/' + publication_id)
  					.map((res: Response) => res.json());
  }

  addComment(body:string, publication_id:string, blogueur_id:string) {
	let urlSearchParams = new URLSearchParams();
	urlSearchParams.set('body', body);
	urlSearchParams.set('publication_id', publication_id);
	urlSearchParams.set('blogueur_id', blogueur_id);

  	console.log(urlSearchParams);
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://pollution-blog.app/api/commentaire',
    					 urlSearchParams,
    					 {headers: headers});
  }

}