import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.css'],
})
export class NewModalComponent implements OnInit {
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  title: string;
  content: string;

  constructor(
    public dialogRef: MatDialogRef<NewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  submitPost() {
    const post = {
      postTitle: this.title,
      postContent: this.content,
    };
    this.title = '';
    this.content = '';
    this.submitted.emit(post);
    this.dialogRef.close('What is happening');
  }
}
