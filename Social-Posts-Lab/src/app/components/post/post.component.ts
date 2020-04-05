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

  constructor() {}

  ngOnInit(): void {}

  deletePost(post) {
    this.deleted.emit(post);
  }
}
