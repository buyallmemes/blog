import {Injectable} from '@angular/core';
import {Post} from "./post";
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post_files: string[] = [
    "assets/posts/29.03.2024.1.md",
  ];

  constructor(private httpClient: HttpClient) {
  }

  public getPosts(): Observable<Post[]> {
    let posts = this.post_files.map(file => this.getFileContent(file));
    return forkJoin(posts);
  }

  private getFileContent(file: string): Observable<Post> {
    return this.httpClient.get(file, {responseType: 'text'})
      .pipe(map(data => {
        return {content: data}
      }));
  }
}
