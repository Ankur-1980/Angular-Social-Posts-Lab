import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  title: string;
  content: string;

  constructor(
    public dialogBox: MatDialogRef<PostFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  submitPost(form: NgForm) {
    const post = {
      postTitle: form.value.title,
      postContent: form.value.content,
      votes: 0,
    };

    this.dialogBox.close({ event: 'close', data: post });
  }

  cancel() {
    this.dialogBox.close();
  }
}
