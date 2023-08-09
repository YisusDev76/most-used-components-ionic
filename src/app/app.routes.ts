import { Routes } from '@angular/router';
import { FirstWithTabsPage } from './pages/first-with-tabs/first-with-tabs.page';
import { SecondPage } from './pages/second/second.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage),
    children: [
      {
        path:'', 
        redirectTo:'first',
        pathMatch: 'full' // Añade esto aquí
      },
      {
        path: 'first',
        component: FirstWithTabsPage
      },
      {
        path: 'second', 
        component: SecondPage
      },
    ],

  },

];
