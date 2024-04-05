import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {Post} from "../post/post";
import {BlogService} from "./blog.service";
import {inject} from "@angular/core";

export const blogResolver: ResolveFn<Post[]> = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot
) => {
  return inject(BlogService)
    .getPosts();
};
