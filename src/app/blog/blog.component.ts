/**
 * Blog component responsible for displaying blog posts and handling post selection.
 * This component manages the display of blog posts, handles URL route navigation,
 * and updates the document title based on the selected post.
 */
import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForOf, NgIf, ViewportScroller } from '@angular/common';
import { Subscription } from 'rxjs';

// Application imports
import { PostComponent } from '../post/post.component';
import { Post } from '../post/post';
import { Blog } from './blog';
import { HighlightService } from './highlight.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostComponent, NgForOf, NgIf],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit, AfterViewChecked, OnDestroy {
  /** The blog data containing all posts */
  blog?: Blog;

  /** Current post identifier */
  postId: string = '';

  /** Currently selected blog post */
  selectedPost?: Post;

  /** Collection of subscriptions to be cleaned up on destroy */
  private subscriptions: Subscription[] = [];

  /**
   * Creates an instance of BlogComponent.
   *
   * @param scroller - Service for scrolling viewport to specific positions
   * @param route - Current activated route information
   * @param router - Angular router service for navigation
   * @param highlightService - Service for syntax highlighting in code blocks
   * @param titleService - Service for setting document title
   */
  constructor(
    private scroller: ViewportScroller,
    private route: ActivatedRoute,
    private router: Router,
    private highlightService: HighlightService,
    private titleService: Title
  ) {}

  /**
   * Lifecycle hook that is called after Angular has fully initialized the component's view.
   * Updates the page title based on the selected post and applies syntax highlighting.
   */
  ngAfterViewChecked(): void {
    this.updatePageTitle();
    this.highlightService.highlightAll();
  }

  /**
   * Lifecycle hook that is called when the component is initialized.
   * Loads blog posts and sets up route parameter subscription.
   */
  ngOnInit(): void {
    this.loadPosts();
    this.setupRouteParamListener();
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   * Cleans up all subscriptions to prevent memory leaks.
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to prevent memory leaks
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Selects a post and updates the URL.
   *
   * @param post - The post to be selected
   */
  selectPost(post: Post): void {
    this.selectedPost = post;
    this.postId = post.anchor;

    // Update page title
    this.updatePageTitle();

    // Update URL using Router to navigate to the post page
    this.router.navigate(['/blog', post.anchor]);
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
   * Loads blog posts from the route data and selects the initial post.
   */
  private loadPosts(): void {
    const subscription = this.route.data.subscribe(({ blog }) => {
      this.blog = blog;
      this.updateSelectedPostFromRouteParams();
    });

    this.subscriptions.push(subscription);
  }

  /**
   * Sets up a listener for URL route parameter changes.
   */
  private setupRouteParamListener(): void {
    const subscription = this.route.paramMap.subscribe(params => {
      const postId = params.get('postId');
      this.postId = postId || '';
      this.updateSelectedPostFromRouteParams();
    });

    this.subscriptions.push(subscription);
  }

  /**
   * Updates the selected post based on the current route parameters.
   * If no matching post is found, defaults to the first post.
   */
  private updateSelectedPostFromRouteParams(): void {
    // Return early if blog or blog.posts is not defined
    if (!this.blog || !this.blog.posts) {
      return;
    }

    if (this.postId && this.blog.posts.length > 0) {
      // Try to find post matching the route parameter
      this.selectedPost = this.findPostByAnchor(this.postId) || this.blog.posts[0];

      // If we couldn't find the post but are on a specific route, redirect to the first post
      if (!this.findPostByAnchor(this.postId) && this.postId) {
        this.router.navigate(['/blog', this.blog.posts[0].anchor]);
      }
    } else if (this.blog.posts.length > 0) {
      // Default to first post if no route parameter or matching post
      this.selectedPost = this.blog.posts[0];

      // If we're on the home route with no postId, we could optionally redirect to the first post
      if (this.route.snapshot.url.length === 0) {
        // We're on the root path, could redirect if desired
        // this.router.navigate(['/blog', this.blog.posts[0].anchor]);
      }
    }
  }

  /**
   * Finds a post by its anchor identifier.
   *
   * @param anchor - The anchor to search for
   * @returns The matching post or undefined if not found
   */
  private findPostByAnchor(anchor: string): Post | undefined {
    return this.blog?.posts.find(post => post.anchor === anchor);
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
