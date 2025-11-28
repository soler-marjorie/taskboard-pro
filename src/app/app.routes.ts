import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Compteur } from './compteur/compteur';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // racine → /home
    { path: 'home', component: Home },
    { path: 'compteur', component: Compteur },
    { path: 'about', component: About },
    { path: '**', redirectTo: 'home' } // fallback
];
