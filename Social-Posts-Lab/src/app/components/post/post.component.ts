import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  votes = 0;
  constructor() {}

  ngOnInit(): void {}
  post: Post[] = [
    {
      postTitle: 'Grand Circus',
      postContent: 'Grand Circus is cool',
      votes: this.votes,
    },
    {
      postTitle: 'Ritual',
      postContent: 'Ritual is a well developed app',
      votes: this.votes,
    },
    {
      postTitle: 'Scott',
      postContent: 'Scott rides scooters',
      votes: this.votes,
    },
  ];
}
