/**
 * Service responsible for fetching blog data from the API.
 * Handles API communication, error handling, and data transformation.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Blog } from './blog';

/**
 * Default timeout for API requests in milliseconds
 */
const API_TIMEOUT_MS = 10000;

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  /**
   * URL for the blog API endpoint, retrieved from environment configuration
   */
  private readonly blogApiUrl: string = environment.blogApiUrl;

  /**
   * Creates an instance of BlogService.
   *
   * @param httpClient - Angular's HttpClient for making API requests
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * Fetches blog data from the API.
   * Includes retry logic and error handling.
   *
   * @returns An Observable that emits the blog data or an empty blog on error
   */
  fetchBlog(): Observable<Blog> {
    return this.httpClient.get<Blog>(this.blogApiUrl).pipe(
      // Add timeout to prevent hanging requests
      timeout(API_TIMEOUT_MS),
      // Retry the request up to 3 times before giving up
      retry(3),
      // Handle errors gracefully
      catchError((error: HttpErrorResponse) => this.handleError(error))
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
