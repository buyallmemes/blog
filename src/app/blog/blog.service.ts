/**
 * Service responsible for fetching blog data from the API.
 * Includes smart caching and individual article fetching capabilities.
 */
import {inject, Injectable, makeStateKey, PLATFORM_ID, TransferState} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map, retry, shareReplay, tap, timeout} from 'rxjs/operators';
import {isPlatformServer} from '@angular/common';

import {environment} from '../../environments/environment';
import {Blog} from './blog';
import {Post} from '../post/post';

/**
 * Default timeout for API requests in milliseconds
 */
const API_TIMEOUT_MS = 10000;

/**
 * State key for storing blog data in TransferState
 */
const BLOG_KEY = makeStateKey<Blog>('blogData');
const POST_KEY_PREFIX = 'post_';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  /**
   * URL for the blog API endpoint
   */
  private readonly blogApiUrl: string = environment.blogApiUrl;
  private readonly postApiUrl: string = `${environment.blogApiUrl}/`;
  private platformId = inject(PLATFORM_ID);
  private transferState = inject(TransferState);

  /**
   * Cache of loaded blog posts
   * Key: post anchor, Value: post data
   */
  private postCache = new Map<string, Post>();

  /**
   * Subject that emits when posts list is updated
   */
  private postsSubject = new BehaviorSubject<Post[]>([]);

  /**
   * Observable that clients can subscribe to for posts list updates
   */
  public posts$ = this.postsSubject.asObservable();

  /**
   * Creates an instance of BlogService.
   *
   * @param httpClient - Angular's HttpClient for making API requests
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * Fetches blog data from the API or from TransferState if available.
   * Uses smart caching to avoid duplicate requests.
   *
   * @returns An Observable that emits the blog data
   */
  fetchBlog(): Observable<Blog> {
    // Check if we have the blog data in the transfer state
    const cachedBlogData = this.transferState.get<Blog | null>(BLOG_KEY, null);
    if (cachedBlogData) {
      // Store posts in the cache
      if (cachedBlogData.posts) {
        cachedBlogData.posts.forEach(post => {
          this.postCache.set(post.anchor, post);
        });

        // Update posts subject
        this.postsSubject.next(cachedBlogData.posts);
      }

      return of(cachedBlogData);
    }

    // Otherwise fetch from API
    return this.httpClient.get<Blog>(this.blogApiUrl).pipe(
      timeout(API_TIMEOUT_MS),
      retry(3),
      tap(blog => {
        // Cache the individual posts
        if (blog && blog.posts) {
          blog.posts.forEach(post => {
            this.postCache.set(post.anchor, post);
          });

          // Update posts subject
          this.postsSubject.next(blog.posts);
        }

        // Store in transfer state if we're on the server
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(BLOG_KEY, blog);
        }
      }),
      shareReplay(1), // Share the response with all subscribers
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  /**
   * Fetches a single blog post by its anchor.
   * Uses cached data if available.
   *
   * @param anchor The post anchor/slug
   * @returns An Observable that emits the post data
   */
  fetchPost(anchor: string): Observable<Post> {
    // Check if we already have this post in our cache
    if (this.postCache.has(anchor)) {
      return of(this.postCache.get(anchor)!);
    }

    // Check transfer state (for SSG/SSR)
    const postStateKey = makeStateKey<Post>(`${POST_KEY_PREFIX}${anchor}`);
    const cachedPost = this.transferState.get<Post | null>(postStateKey, null);
    if (cachedPost) {
      // Store in local cache
      this.postCache.set(anchor, cachedPost);
      return of(cachedPost);
    }

    // Otherwise fetch from API
    return this.httpClient.get<Post>(`${this.postApiUrl}/${anchor}`).pipe(
      timeout(API_TIMEOUT_MS),
      retry(2),
      tap(post => {
        // Store in cache
        this.postCache.set(anchor, post);

        // Store in transfer state if on server
        if (isPlatformServer(this.platformId)) {
          this.transferState.set(postStateKey, post);
        }
      }),
      catchError(() => {
        // If individual post fetch fails, try getting it from the full blog data
        return this.fetchBlog().pipe(
          map(blog => {
            const post = blog.posts.find(p => p.anchor === anchor);
            if (!post) {
              throw new Error(`Post with anchor "${anchor}" not found`);
            }
            return post;
          })
        );
      })
    );
  }

  /**
   * Handles HTTP errors from API requests.
   * Logs the error and returns a fallback empty blog object.
   *
   * @param error - The HTTP error response
   * @returns An Observable with an empty blog object
   */
  private handleError(error: HttpErrorResponse): Observable<Blog> {
    // Log different error messages based on error type
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('Client-side error fetching blog data:', error.error.message);
    } else {
      // Server-side error
      console.error(
        `Server error fetching blog data: ${error.status}, ` + `message: ${error.message}`
      );
    }

    // Return an empty blog object when there's an error
    return of({ posts: [] });
  }
}
