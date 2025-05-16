import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, ViewportScroller} from "@angular/common";
import {PostComponent} from "../post/post.component";
import {ActivatedRoute} from "@angular/router";
import {HighlightService} from "./highlight.service";
import {Blog} from "./blog";
import {Title} from "@angular/platform-browser";
import {Post} from "../post/post";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit, AfterViewChecked {
  blog?: Blog;
  fragment: string | null = "";
  selectedPost?: Post;

  constructor(private scroller: ViewportScroller,
              private route: ActivatedRoute,
              private highlightService: HighlightService,
              private titleService: Title
  ) {
  }

  ngAfterViewChecked(): void {
    if (this.fragment) {
      this.scroller.scrollToAnchor(this.fragment);
      this.titleService.setTitle(`BuyAllMemes Blog - ${this.blog?.posts.find(post => post.anchor === this.fragment)?.title}`);
    } else {
      this.titleService.setTitle(`BuyAllMemes Blog`);
    }
    this.highlightService.highlightAll();
  }


  ngOnInit(): void {
    this.loadPosts();
    this.extractFragment();
  }

  private loadPosts() {
    this.route.data.subscribe(({blog}) => {
      this.blog = blog;
      // Set the selected post based on the fragment or default to the first post
      if (this.fragment && this.blog) {
        this.selectedPost = this.blog.posts.find(post => post.anchor === this.fragment);
      } else if (this.blog && this.blog.posts.length > 0) {
        this.selectedPost = this.blog.posts[0];
      }
    });
  }

  private extractFragment() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
      // Update selected post when fragment changes
      if (fragment && this.blog) {
        this.selectedPost = this.blog.posts.find(post => post.anchor === fragment);
      }
    });
  }

  selectPost(post: Post): void {
    this.selectedPost = post;
    this.fragment = post.anchor;
    this.scroller.scrollToAnchor(post.anchor);
    this.titleService.setTitle(`BuyAllMemes Blog - ${post.title}`);
  }

  isSelectedPost(post: Post): boolean {
    return this.selectedPost?.anchor === post.anchor;
  }
}
