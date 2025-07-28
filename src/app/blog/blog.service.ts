/**
 * Simple blog service that returns hardcoded posts.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Blog } from './blog';
import { Post } from '../post/post';
// Blog service is no longer used - posts come from static JSON

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  /**
   * Subject that emits when posts list is updated
   */
  private postsSubject = new BehaviorSubject<Post[]>([]);

  /**
   * Observable that clients can subscribe to for posts list updates
   */
  public posts$ = this.postsSubject.asObservable();

  /**
   * Returns empty blog data - not used anymore.
   */
  fetchBlog(): Observable<Blog> {
    return of({ posts: [] });
  }

  /**
   * Not used anymore - posts come from static JSON.
   */
  fetchPost(anchor: string): Observable<Post> {
    throw new Error('Blog service no longer used');
  }
}
