import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  title: string;
  content: string;

  constructor() {}

  ngOnInit(): void {}

  submitPost() {
    const post = {
      postTitle: this.title,
      postContent: this.content,
    };
    this.title = '';
    this.content = '';
    this.submitted.emit(post);
  }
}
