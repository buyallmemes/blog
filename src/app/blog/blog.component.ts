/**
 * Blog component responsible for displaying blog posts and handling post selection.
 * This component manages the display of blog posts, handles URL fragment navigation,
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
  imports: [
    PostComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit, AfterViewChecked, OnDestroy {
  /** The blog data containing all posts */
  blog?: Blog;

  /** Current URL fragment identifier */
  fragment: string = "";

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
   * Loads blog posts and sets up fragment subscription.
   */
  ngOnInit(): void {
    this.loadPosts();
    this.setupFragmentListener();
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
   * Selects a post and updates the URL fragment.
   *
   * @param post - The post to be selected
   */
  selectPost(post: Post): void {
    this.selectedPost = post;
    this.fragment = post.anchor;

    // Scroll to top of page
    this.scroller.scrollToPosition([0, 0]);

    // Update page title
    this.updatePageTitle();

    // Update URL with fragment using Router
    this.router.navigate([], {
      relativeTo: this.route,
      fragment: post.anchor,
      replaceUrl: false // Set to true if you don't want to add to browser history
    });
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
      this.updateSelectedPostFromFragment();
    });

    this.subscriptions.push(subscription);
  }

  /**
   * Sets up a listener for URL fragment changes.
   */
  private setupFragmentListener(): void {
    const subscription = this.route.fragment.subscribe(fragment => {
      this.fragment = fragment || "";
      this.updateSelectedPostFromFragment();
    });

    this.subscriptions.push(subscription);
  }

  /**
   * Updates the selected post based on the current fragment.
   * If no matching post is found, defaults to the first post.
   */
  private updateSelectedPostFromFragment(): void {
    if (!this.blog) {
      return;
    }

    if (this.fragment && this.blog.posts.length > 0) {
      // Try to find post matching the fragment
      this.selectedPost = this.findPostByAnchor(this.fragment) || this.blog.posts[0];
    } else if (this.blog.posts.length > 0) {
      // Default to first post if no fragment or matching post
      this.selectedPost = this.blog.posts[0];
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

    if (this.fragment) {
      const postTitle = this.findPostByAnchor(this.fragment)?.title;
      this.titleService.setTitle(postTitle ? `${baseTitle} - ${postTitle}` : baseTitle);
    } else {
      this.titleService.setTitle(baseTitle);
    }
  }
}
