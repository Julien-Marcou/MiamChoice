import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VotesComponent} from './votes.component';

const votesRoutes: Routes = [
    {
        path: 'votes',
        component: VotesComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(votesRoutes),
    ],
    exports: [
        RouterModule,
    ],
})

export class VotesRoutingModule { }
