import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'mg-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {
  }

}
