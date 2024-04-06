import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {BlogService} from "./blog.service";
import {inject} from "@angular/core";
import {Blog} from "./blog";

export const blogResolver: ResolveFn<Blog> = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot
) => {
  return inject(BlogService)
    .fetchBlog();
};
