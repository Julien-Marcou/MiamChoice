import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlacesComponent} from './places.component';

const placesRoutes: Routes = [
    {
        path: 'places',
        component: PlacesComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(placesRoutes),
    ],
    exports: [
        RouterModule,
    ],
})

export class PlacesRoutingModule { }
