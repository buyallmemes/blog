/**
 * Simple blog component that displays hardcoded blog posts.
 */
import {AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Location, NgForOf, NgIf} from '@angular/common';
import {Subscription} from 'rxjs';

// Application imports
import {PostComponent} from '../post/post.component';
import {Post} from '../post/post';
import {HighlightService} from './highlight.service';
import {BLOG_POSTS} from '../posts.data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostComponent, NgForOf, NgIf],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit, AfterViewChecked, OnDestroy {
  /** Currently selected blog post */
  selectedPost?: Post;

  /** List of all available posts for navigation */
  posts: Post[] = [];

  /** Loading state */
  loading = false;

  /** Current post identifier */
  postId: string = '';

  /** Collection of subscriptions to be cleaned up on destroy */
  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private highlightService: HighlightService,
    private titleService: Title,
    private location: Location
  ) {}

  /**
   * Lifecycle hook that is called after Angular has fully initialized the component's view.
   */
  ngAfterViewChecked(): void {
    this.updatePageTitle();
    this.highlightService.highlightAll();
  }

  /**
   * Lifecycle hook that is called when the component is initialized.
   */
  ngOnInit(): void {
    // Dead simple: get posts and show the right one
    this.posts = BLOG_POSTS;
    const postId = this.route.snapshot.paramMap.get('postId');
    this.selectedPost = this.posts.find(p => p.anchor === postId) || this.posts[0];
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to prevent memory leaks
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Selects a post and updates the URL.
   */
  selectPost(post: Post): void {
    if (!post || this.selectedPost?.anchor === post.anchor) return;

    this.selectedPost = post;
    this.postId = post.anchor;
    this.location.go(`/blog/${post.anchor}`);
    window.scrollTo(0, 0);
  }

  /**
   * Checks if a post is currently selected.
   *
   * @param post - The post to check
   * @returns True if the post is currently selected
   */
  isSelectedPost(post: Post): boolean {
    return this.selectedPost?.anchor === post.anchor;
  }


  /**
   * Updates the page title based on the selected post.
   */
  private updatePageTitle(): void {
    const baseTitle = 'BuyAllMemes Blog';
    if (this.selectedPost) {
      this.titleService.setTitle(`${baseTitle} - ${this.selectedPost.title}`);
    } else {
      this.titleService.setTitle(baseTitle);
    }
  }
}
