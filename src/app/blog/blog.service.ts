import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
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
    return this.httpClient.get<Blog>(this.blog_api_url);
  }
}
