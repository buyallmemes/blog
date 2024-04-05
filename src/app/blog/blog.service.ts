import {Injectable} from '@angular/core';
import {Post} from "../post/post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog_api_url = environment.blogApiUrl

  constructor(private httpClient: HttpClient) {
  }

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.blog_api_url);
  }
}
