import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getPosts() {
    return [
      {
        postTitle: 'Grand Circus',
        postContent: 'Grand Circus is cool',
        votes: 0,
      },
      {
        postTitle: 'Ritual',
        postContent: 'Ritual is a well developed app',
        votes: 0,
      },
      {
        postTitle: 'Scott',
        postContent: 'Scott rides scooters',
        votes: 0,
      },
    ];
  }
}
