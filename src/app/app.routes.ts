import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'first-with-tabs',
    loadComponent: () => import('./pages/first-with-tabs/first-with-tabs.page').then( m => m.FirstWithTabsPage)
  },
  {
    path: 'second',
    loadComponent: () => import('./pages/second/second.page').then( m => m.SecondPage)
  },
  {
    path: 'tab1',
    loadComponent: () => import('./pages/tab1/tab1.page').then( m => m.Tab1Page)
  },
  {
    path: 'tab2',
    loadComponent: () => import('./pages/tab2/tab2.page').then( m => m.Tab2Page)
  },
  {
    path: 'details',
    loadComponent: () => import('./pages/details/details.page').then( m => m.DetailsPage)
  },
];
