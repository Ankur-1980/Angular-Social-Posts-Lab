import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[];
  votes = 0;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  deleted(post: Post) {
    this.posts = this.posts.filter((p) => p.postTitle !== post.postTitle);
  }
}
