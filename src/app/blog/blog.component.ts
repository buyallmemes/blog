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
import {Blog} from './blog';
import {HighlightService} from './highlight.service';
import {BlogService} from './blog.service';

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
    private location: Location,
    private blogService: BlogService
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
    // Get posts from service
    this.blogService.posts$.subscribe(posts => {
      this.posts = posts;
      this.initializeFromRoute();
    });
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
   * Initialize from route parameters.
   */
  private initializeFromRoute(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('postId');
      
      if (postId && this.posts.length > 0) {
        const post = this.posts.find(p => p.anchor === postId);
        this.selectedPost = post || this.posts[0];
        this.postId = this.selectedPost.anchor;
      } else if (this.posts.length > 0) {
        this.selectedPost = this.posts[0];
        this.postId = this.posts[0].anchor;
      }
    });
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
