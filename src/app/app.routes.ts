import { Routes } from '@angular/router';
import { SaveStateGuard } from './core/guards/save-state.guard';

export const routes: Routes = [
    {
        path: '', 
        pathMatch:'full', 
        redirectTo: 'home'
    },
    {
        path: 'home', 
        loadComponent: () => import('./features/pokemon/home/home.component').then(m => m.HomeComponent),
        canDeactivate: [SaveStateGuard ]
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
 