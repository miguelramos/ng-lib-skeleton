import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
];
