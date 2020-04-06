import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { SocialPostsComponent } from './components/social-posts/social-posts.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    PostComponent,
    PostFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  entryComponents: [PostFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
