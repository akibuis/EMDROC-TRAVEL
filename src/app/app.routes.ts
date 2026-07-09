import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home-page.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about-page.routes').then(m => m.ABOUT_ROUTES)
  },
  {
    path: 'services',
    loadChildren: () => import('./features/services/services-page.routes').then(m => m.SERVICES_ROUTES)
  },
  {
    path: 'destinations',
    loadChildren: () => import('./features/destinations/destinations-page.routes').then(m => m.DESTINATIONS_ROUTES)
  },

  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact-page.routes').then(m => m.CONTACT_ROUTES)
  },
  {
    path: 'blog',
    loadChildren: () => import('./features/blog/blog-page.routes').then(m => m.BLOG_ROUTES)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
