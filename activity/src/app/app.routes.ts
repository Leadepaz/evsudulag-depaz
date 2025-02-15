import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'main',
        loadChildren: () => import('./main/main-users.module').then(m => m.MainUsersModule)
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    }
];
