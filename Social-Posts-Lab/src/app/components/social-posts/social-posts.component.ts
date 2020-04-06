import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { MatDialog } from '@angular/material/dialog/';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[];
  votes = 0;
  constructor(public dialog: MatDialog, private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostFormComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  deleted(post: Post) {
    this.posts = this.posts.filter((p) => p.postTitle !== post.postTitle);
  }

  submitted(post) {
    this.posts.push(post);
  }
}
