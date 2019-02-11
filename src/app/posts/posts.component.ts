import {PostsService} from './../posts.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private postService: PostsService) {}

  ngOnInit() {}

  getPosts() {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
