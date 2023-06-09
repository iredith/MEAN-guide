import { Component, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  @Input() posts: Post[] = [
    // {
    //   title: 'First Post',
    //   content: "This is the first post's content",
    // },
    // {
    //   title: 'Second Post',
    //   content: "This is the second post's content",
    // },
    // {
    //   title: 'Third Post',
    //   content: "This is the third post's content",
    // },
  ];
}
