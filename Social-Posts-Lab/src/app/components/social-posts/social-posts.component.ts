import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[];
  votes = 0;
  constructor() {}

  ngOnInit(): void {
    this.posts = [
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
}
