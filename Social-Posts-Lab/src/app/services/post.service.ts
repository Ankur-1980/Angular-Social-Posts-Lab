import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  postData: Post;

  getPosts() {
    return [
      {
        postTitle: 'Grand Circus',
        postContent: 'Grand Circus is cool',
      },
      {
        postTitle: 'Ritual',
        postContent: 'Ritual is a well developed app',
      },
      {
        postTitle: 'Scott',
        postContent: 'Scott rides scooters',
      },
    ];
  }
}
