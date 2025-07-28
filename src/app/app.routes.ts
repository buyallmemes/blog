import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'blog/:postId', component: BlogComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
