import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, catchError, retry} from "rxjs";
import {environment} from "../../environments/environment";
import {Blog} from "./blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog_api_url = environment.blogApiUrl

  constructor(private httpClient: HttpClient) {
  }

  public fetchBlog(): Observable<Blog> {
    return this.httpClient.get<Blog>(this.blog_api_url)
      .pipe(
        retry(3), // Retry the request up to 3 times before giving up
        catchError(error => {
          console.error('Error fetching blog data:', error);
          // Return an empty blog object when there's an error
          return of({ posts: [] });
        })
      );
  }
}
