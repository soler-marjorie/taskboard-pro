import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './features/about/about';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // racine → /home
    { path: 'home', component: Home },

    {
        path: 'tasks',
        loadChildren: () =>
            import('./features/tasks/tasks-page/routes').then((m) => m.tasksPageRoute),
    },

    {
        path: 'about',
        loadChildren: () =>
            import('./features/about/routes').then((m) => m.AboutPageRoute),
    },
    
    { path: 'about', component: About },
    { path: '**', redirectTo: 'home' } // fallback

    
];
