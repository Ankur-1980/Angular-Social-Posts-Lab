import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostFormComponent } from 'src/app/components/post-form/post-form.component';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[];
  post: Post;

  constructor(private postService: PostService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  deleted(post: Post): any {
    this.posts = this.posts.filter((p) => p.postTitle !== post.postTitle);
  }

  upVoted(post: Post): any {
    this.posts.map((p) =>
      p.postTitle === post.postTitle ? { ...p, votes: p.votes++ } : p
    );
  }

  downVoted(post: Post): any {
    this.posts.map((p) =>
      p.postTitle === post.postTitle ? { ...p, votes: p.votes-- } : p
    );
  }

  openForm(): any {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    const dialogBox = this.dialog.open(PostFormComponent, dialogConfig);

    dialogBox.afterClosed().subscribe((result) => {
      this.posts.push(result.data);
    });
  }
}
