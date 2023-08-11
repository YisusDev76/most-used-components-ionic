import { Routes } from '@angular/router';
import { FirstWithTabsPage } from './first-with-tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component:FirstWithTabsPage,
    children: [
      {
        path:'tab1',
        loadComponent: ()=> import ('../tab1/tab1.page').then(m =>m.Tab1Page)
      },
      {
        path:'tab2',
        loadComponent: ()=> import ('../tab2/tab2.page').then(m =>m.Tab2Page)
      },
      {
        path:'tab1/details',
        loadComponent: ()=> import ('../details/details.page').then(m =>m.DetailsPage)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];
