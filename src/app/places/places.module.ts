import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlacesRoutingModule } from './places-routing.module';
import { DistancePipe } from './shared/distance.pipe';
import { PlacesComponent } from './places.component';
import { PlaceComponent } from './place/place.component';
import { PlaceFiltersComponent } from './place-filters/place-filters.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceMapComponent } from './place-map/place-map.component';
import { PlacesService } from './shared/places.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PlacesRoutingModule,
    ],
    declarations: [
        DistancePipe,
        PlacesComponent,
        PlaceComponent,
        PlaceFiltersComponent,
        PlaceListComponent,
        PlaceMapComponent,
    ],
})

export class PlacesModule { }
