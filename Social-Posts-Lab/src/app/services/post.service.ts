import { Injectable } from '@angular/core';

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
