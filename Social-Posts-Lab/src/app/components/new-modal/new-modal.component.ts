import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.css'],
})
export class NewModalComponent implements OnInit {
  title: string;
  content: string;

  constructor(
    public dialogRef: MatDialogRef<NewModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  closeDialog(form: NgForm) {
    const post = {
      postTitle: form.value.title,
      postContent: form.value.content,
    };

    this.dialogRef.close({ event: 'close', data: post });
  }

  cancel() {
    this.dialogRef.close();
  }
}
