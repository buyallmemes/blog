import {Injectable} from '@angular/core';
import {Post} from "../post/post";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog_api_url = 'https://api.buyallmemes.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  public getPosts(): Promise<Post[]> {
    return firstValueFrom(this.httpClient.get<Post[]>(this.blog_api_url));
  }
}
