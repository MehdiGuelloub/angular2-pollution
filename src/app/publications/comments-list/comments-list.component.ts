  import { Component, OnInit, Input } from '@angular/core';
  import { NgForm } from '@angular/forms';

  import { Auth } from '../../auth-service.service';
  import { User } from '../../user';
  import { Comment } from '../comment';
  import { CommentaireService } from '../../commentaire.service';

  @Component({
    selector: 'mg-comments-list',
    templateUrl: './comments-list.component.html',
    providers: [CommentaireService, Auth]
  })
  export class CommentsListComponent implements OnInit {
    comments: Comment[] = [];
    
    @Input() publication: string;

    commentaire = {
  	  body: ''
    };
    
    constructor(private auth: Auth, private commentService: CommentaireService) {
    }

    ngOnInit() {
      if(this.comments.length === 0) {
        this.update();
      }
    }

    update() {
        this.comments = [];
        this.commentService.getCommentsByPublication(this.publication)
            .subscribe(
              (data: any) => {
                console.log(data);
                for (let d of data) {
                  this.comments.push(new Comment(new User(d.name, d.image), d.created_at , d.body));
                }
              },
              (err: any) => console.log('#####', err)
            );
    }

    get profile() {
      return JSON.parse(localStorage.getItem('profile'));
    }

    addComment(form: NgForm) {
      this.commentService.addComment(this.commentaire.body, this.publication, JSON.parse(localStorage.getItem('profile')).user_id )
                        .subscribe(
                              (data: any) => this.update(),
                              (error: any) => console.log(error),
                         );    
      this.commentaire.body = "";
    }

  }
