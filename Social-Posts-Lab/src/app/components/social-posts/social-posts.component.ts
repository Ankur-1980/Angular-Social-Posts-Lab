import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostFormComponent } from 'src/app/components/post-form/post-form.component';
import { NewModalComponent } from 'src/app/components/new-modal/new-modal.component';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[];
  votes = 0;
  constructor(private postService: PostService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  deleted(post: Post) {
    this.posts = this.posts.filter((p) => p.postTitle !== post.postTitle);
  }

  openForm() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    const dialogBox = this.dialog.open(PostFormComponent, dialogConfig);

    dialogBox.afterClosed().subscribe((result) => {
      this.posts.push(result.data);
    });
  }

  // openNewDialog() {
  //   const dialogRef = this.dialog.open(NewModalComponent, {
  //     width: '250px',
  //     backdropClass: 'custom-dialog-backdrop-class',
  //     panelClass: 'custom-dialog-panel-class',
  //   });

  // }
}
