import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/votes',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
    ],
})

export class AppRoutingModule { }
