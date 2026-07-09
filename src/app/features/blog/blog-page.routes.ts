import { Routes } from '@angular/router';
import { BlogPage } from './blog-page/blog-page';
import { BlogDetail } from './blog-detail/blog-detail';

export const BLOG_ROUTES: Routes = [
  { path: '', component: BlogPage },
  { path: ':id', component: BlogDetail },
];
