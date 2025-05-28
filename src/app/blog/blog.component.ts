/**
 * Blog component responsible for displaying blog posts and handling post selection.
 * This component manages the display of blog posts, handles URL fragment navigation,
 * and updates the document title based on the selected post.
 */
import {AfterViewChecked, Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {isPlatformBrowser, NgForOf, NgIf, ViewportScroller} from '@angular/common';
import {Subscription} from 'rxjs';

// Application imports
import {PostComponent} from '../post/post.component';
import {Post} from '../post/post';
import {Blog} from './blog';
import {HighlightService} from './highlight.service';
import {SeoService} from '../services/seo.service';

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

  /** Current URL fragment identifier */
  fragment: string = '';

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
   * @param seoService - Service for managing SEO metadata
   * @param platformId - The platform ID to check if the code is running in the browser
   */
  constructor(
    private scroller: ViewportScroller,
    private route: ActivatedRoute,
    private router: Router,
    private highlightService: HighlightService,
    private titleService: Title,
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
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
   * Selects a post and updates the URL.
   *
   * @param post - The post to be selected
   */
  selectPost(post: Post): void {
    this.selectedPost = post;
    this.fragment = post.anchor;

    // Update page title
    this.updatePageTitle();

    // Update URL using path-based navigation
    this.router.navigate(['/post', post.anchor], {
      replaceUrl: false, // Set to true if you don't want to add to browser history
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

      // Check if we have a post slug in the route params
      this.route.paramMap.subscribe(params => {
        const slug = params.get('slug');
        if (slug) {
          this.fragment = slug;
        }
        this.updateSelectedPostFromFragment();
      });
    });

    this.subscriptions.push(subscription);
  }

  /**
   * Sets up a listener for URL fragment changes.
   * This maintains backward compatibility with fragment-based navigation.
   */
  private setupFragmentListener(): void {
    const subscription = this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.fragment = fragment;
        this.updateSelectedPostFromFragment();
      }
    });

    this.subscriptions.push(subscription);
  }

  /**
   * Updates the selected post based on the current fragment.
   * If no matching post is found, defaults to the first post.
   */
  private updateSelectedPostFromFragment(): void {
    // Return early if blog or blog.posts is not defined
    if (!this.blog || !this.blog.posts) {
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
   * Also updates SEO metadata for better search engine visibility.
   */
  private updatePageTitle(): void {
    const baseTitle = 'BuyAllMemes Blog';

    if (this.selectedPost) {
      const postTitle = this.selectedPost.title;
      this.titleService.setTitle(postTitle ? `${baseTitle} - ${postTitle}` : baseTitle);

      // Update SEO metadata
      this.updateSeoMetadata();
    } else {
      this.titleService.setTitle(baseTitle);

      // Set default blog metadata
      this.seoService.updateMetaTags({
        title: baseTitle,
        description: 'Technical blog about software engineering and development patterns',
        type: 'website',
      });
    }
  }

  /**
   * Updates SEO metadata based on the selected post
   */
  private updateSeoMetadata(): void {
    if (!this.selectedPost) return;

    // Extract description from content (first 150 characters without HTML)
    const tempElement = isPlatformBrowser(this.platformId) ? document.createElement('div') : { innerHTML: '', textContent: '' };
    tempElement.innerHTML = this.selectedPost.content;
    const textContent = tempElement.textContent || '';
    const description = textContent.substring(0, 150).trim() + '...';

    // Look for an image in the post content, if any
    let image: string | undefined;
    const imgMatch = this.selectedPost.content.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch && imgMatch[1]) {
      image = imgMatch[1];
    }

    // Parse date string into Date object
    const publishDate = new Date(this.selectedPost.date);

    this.seoService.updateMetaTags({
      title: this.selectedPost.title,
      description: description,
      image: image,
      type: 'article',
      keywords: `software engineering, development, ${this.selectedPost.title.toLowerCase()}`,
      publishedAt: publishDate,
      author: 'BuyAllMemes', // You can customize this
      url: `https://buyallmemes.com/post/${this.selectedPost.anchor}`,
    });
  }
}
