/**
 * Blog component responsible for displaying blog posts and handling post selection.
 * Implements hybrid SSG + client-side navigation approach.
 */
import {AfterViewChecked, Component, inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {isPlatformBrowser, Location, NgForOf, NgIf, ViewportScroller} from '@angular/common';
import {Subscription, switchMap, tap} from 'rxjs';

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
  /** The blog data containing all posts */
  blog?: Blog;

  /** Current post identifier */
  postId: string = '';

  /** Currently selected blog post */
  selectedPost?: Post;

  /** List of all available posts for navigation */
  posts: Post[] = [];

  /** Loading state for currently selected post */
  loading = false;

  /** Collection of subscriptions to be cleaned up on destroy */
  private subscriptions: Subscription[] = [];

  /** Check if we're running in a browser environment */
  private isBrowser: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private highlightService: HighlightService,
    private titleService: Title,
    private location: Location,
    private blogService: BlogService,
    private viewportScroller: ViewportScroller
  ) {
    const platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /**
   * Lifecycle hook that is called after Angular has fully initialized the component's view.
   */
  ngAfterViewChecked(): void {
    this.updatePageTitle();

    // Only run highlightService in browser environment
    if (this.isBrowser && !this.loading) {
      this.highlightService.highlightAll();
    }
  }

  /**
   * Lifecycle hook that is called when the component is initialized.
   */
  ngOnInit(): void {
    // Subscribe to posts list updates from service
    const postsSubscription = this.blogService.posts$.subscribe(posts => {
      this.posts = posts;
    });
    this.subscriptions.push(postsSubscription);

    // Load data and set up route listener
    this.loadInitialData();
    this.setupRouteParamListener();
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
   *
   * @param post - The post to be selected
   */
  selectPost(post: Post): void {
    if (!post || this.selectedPost?.anchor === post.anchor) return;

    this.loading = true;
    this.selectedPost = post;
    this.postId = post.anchor;

    // Update URL using Location to modify URL without full navigation
    const url = `/blog/${post.anchor}`;
    this.location.go(url);

    // Scroll to top of page when selecting a new post
    if (this.isBrowser) {
      this.scrollToTop();
    }

    // Fetch full post content if needed
    this.blogService.fetchPost(post.anchor).subscribe({
      next: (fullPost) => {
        this.selectedPost = fullPost;
        this.loading = false;
        this.updatePageTitle();
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  /**
   * Scrolls the viewport to the top of the page.
   * Uses immediate scrolling for better user experience.
   */
  private scrollToTop(): void {
    // Using setTimeout to ensure this happens after the view has been updated
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
      // As a fallback, also use window.scrollTo
      window.scrollTo(0, 0);
    }, 0);
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
   * Loads initial data from route resolver or service.
   */
  private loadInitialData(): void {
    const subscription = this.route.data.pipe(
      tap(data => {
        this.blog = data['blog'];
      }),
      switchMap(() => {
        // Prefetch all posts in the background
        // This ensures we have the full list even if the resolver only provided the current post
        return this.blogService.fetchBlog();
      })
    ).subscribe({
      next: () => this.updateSelectedPostFromRouteParams(),
      error: () => this.updateSelectedPostFromRouteParams()
    });

    this.subscriptions.push(subscription);
  }

  /**
   * Sets up a listener for URL route parameter changes.
   */
  private setupRouteParamListener(): void {
    const subscription = this.route.paramMap.subscribe(params => {
      const postId = params.get('postId');

      // Only update if the postId actually changed
      if (postId !== this.postId) {
        this.postId = postId || '';
        this.updateSelectedPostFromRouteParams();
      }
    });

    this.subscriptions.push(subscription);
  }

  /**
   * Updates the selected post based on the current route parameters.
   */
  private updateSelectedPostFromRouteParams(): void {
    // If no posts are loaded yet, wait
    if ((!this.posts || this.posts.length === 0) && !this.blog?.posts?.length) {
      return;
    }

    // Use posts from either source
    const availablePosts = this.posts.length > 0 ? this.posts : (this.blog?.posts || []);

    if (this.postId) {
      this.loading = true;
      // Get the full post data from service
      this.blogService.fetchPost(this.postId).subscribe({
        next: (post) => {
          this.selectedPost = post;
          this.loading = false;

          // Scroll to top when a post is loaded via URL navigation
          if (this.isBrowser) {
            this.scrollToTop();
          }
        },
        error: () => {
          // If post not found, default to first available post
          if (availablePosts.length > 0) {
            this.selectedPost = availablePosts[0];
            // Update URL in browser environment
            if (this.isBrowser) {
              this.location.go(`/blog/${availablePosts[0].anchor}`);
              this.scrollToTop();
            }
          }
          this.loading = false;
        }
      });
    } else if (availablePosts.length > 0) {
      // No postId specified, use first available post
      this.selectPost(availablePosts[0]);
    }
  }

  /**
   * Updates the page title based on the selected post.
   */
  private updatePageTitle(): void {
    // Only update title in browser environment
    if (!this.isBrowser) return;

    const baseTitle = 'BuyAllMemes Blog';

    if (this.selectedPost) {
      this.titleService.setTitle(`${baseTitle} - ${this.selectedPost.title}`);
    } else {
      this.titleService.setTitle(baseTitle);
    }
  }
}
