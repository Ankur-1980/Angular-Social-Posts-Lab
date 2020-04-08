import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() deleted: EventEmitter<Post> = new EventEmitter();
  @Output() upVoted: EventEmitter<Post> = new EventEmitter();
  @Output() downVoted: EventEmitter<Post> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deletePost(post): void {
    this.deleted.emit(post);
  }

  upVote(post): void {
    this.upVoted.emit(post);
  }

  downVote(post): void {
    this.downVoted.emit(post);
  }
}
