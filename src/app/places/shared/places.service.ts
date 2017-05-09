import { Injectable } from '@angular/core';

import { places } from '../../../environments/places';
import { Place } from '../shared/place.model';

@Injectable()
export class PlacesService {
	private places: Place[];

	constructor() {
		this.restorePlaces();
	}

	private restorePlaces() {
		this.places = [];
		for(let place of places.places) {
			this.places.push(new Place(
				place.id,
				place.name,
				place.latitude,
				place.longitude,
				place.description,
				place['distance-to-niji'],
				place.type,
				place.keywords,
				place.options,
				place['opening-days']
			));
		}
	}

	getPlaces(): Place[] {
		return this.places;
	}

	getPlaceTypes() {
		return places.types;
	}

	getPlaceOptions() {
		return places.options;
	}

	getPlaceDays() {
		return places.days;
	}

}
