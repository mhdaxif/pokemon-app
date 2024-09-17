import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        pathMatch:'full', 
        redirectTo: 'home'
    },
    {
        path: 'home', 
        loadComponent: () => import('./features/pokemon/home/home.component').then(m => m.HomeComponent)
    }, 
    {
        path: 'detail/:id',
        loadComponent: () => import('./features/pokemon/detail/detail.component').then(m => m.DetailComponent)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
 