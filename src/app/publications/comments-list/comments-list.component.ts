import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../user';
import { Comment } from '../comment';

@Component({
  selector: 'mg-comments-list',
  templateUrl: './comments-list.component.html',
})
export class CommentsListComponent implements OnInit {
  comments: Comment[] = [];
  commentaire = {
	  body: ''
  };
  constructor() { 
  }

  ngOnInit() {
  }

  get profile() {
    return JSON.parse(localStorage.getItem('profile'));
  }

  addComment(form: NgForm) {
	  this.comments.push(new Comment(new User(this.profile.name, this.profile.picture), new Date().toString(), this.commentaire.body));
	  this.commentaire.body = "";
  }

}
