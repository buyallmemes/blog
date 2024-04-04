import {Injectable} from '@angular/core';
import {Post} from "../post/post";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog_api_url = 'https://api.buyallmemes.com/posts';

  constructor(private httpClient: HttpClient) {
  }


  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.blog_api_url);
  }
}
