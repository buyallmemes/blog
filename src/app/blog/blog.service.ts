/**
 * Simple blog service that returns hardcoded posts.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Blog } from './blog';
import { Post } from '../post/post';
import { BLOG_POSTS } from '../posts.data';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  /**
   * Subject that emits when posts list is updated
   */
  private postsSubject = new BehaviorSubject<Post[]>(BLOG_POSTS);

  /**
   * Observable that clients can subscribe to for posts list updates
   */
  public posts$ = this.postsSubject.asObservable();

  /**
   * Returns hardcoded blog data immediately.
   */
  fetchBlog(): Observable<Blog> {
    return of({ posts: BLOG_POSTS });
  }

  /**
   * Fetches a single blog post by its anchor.
   */
  fetchPost(anchor: string): Observable<Post> {
    const post = BLOG_POSTS.find(p => p.anchor === anchor);
    if (!post) {
      throw new Error(`Post with anchor "${anchor}" not found`);
    }
    return of(post);
  }
}
