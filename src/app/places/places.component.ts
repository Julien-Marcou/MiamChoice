import { Component, ViewChild } from '@angular/core';

import { Place } from './shared/place.model';
import { PlacesService } from '../places/shared/places.service';
import { PlaceFiltersComponent } from './place-filters/place-filters.component';
import { PlaceMapComponent } from './place-map/place-map.component';

@Component({
	templateUrl: './places.component.html',
	styleUrls: ['./places.component.scss']
})

export class PlacesComponent {
	@ViewChild(PlaceFiltersComponent) filtersComponent: PlaceFiltersComponent;
	@ViewChild(PlaceMapComponent) mapComponent: PlaceMapComponent;

	places: Place[] = [];
	filteredPlaces: Place[] = [];

	constructor(private placesService: PlacesService) {
		this.places = this.placesService.getPlaces();
	}

	onFilterChange() {
		this.filterPlaces();
	}

	onPlaceSelect(place: Place) {
		this.mapComponent.centerOnPlace(place);
	}

	filterPlaces() {
		let selectedTypes = this.filtersComponent.getSelectedTypes();
		let selectedOptions = this.filtersComponent.getSelectedOptions();
		let selectedDays = this.filtersComponent.getSelectedDays();
		let radius = this.filtersComponent.getRadius();
		let keywords = this.filtersComponent.getKeywords();

		let filteredPlaces: Place[] = [];
		for(let place of this.places) {
			if(place.id === 'niji' || place.match(selectedTypes, selectedOptions, selectedDays, radius, keywords)) {
				filteredPlaces.push(place);
			}
		}
		this.filteredPlaces = filteredPlaces;
	}
}
