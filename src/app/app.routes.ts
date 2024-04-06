import {Routes} from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {blogResolver} from "./blog/blog.resolver";

export const routes: Routes = [
  {path: "", component: BlogComponent, resolve: {blog: blogResolver}},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];
