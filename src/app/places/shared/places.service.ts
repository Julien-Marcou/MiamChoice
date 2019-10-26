import { Injectable } from '@angular/core';

import { places } from '../../../environments/places';
import { Place } from './place.model';

@Injectable()
export class PlacesService {

	private places: Place[] = [];

	getPlaces(): Place[] {
		if (this.places.length !== places.places.length) {
			this.places = [];
			for(let place of places.places) {
				this.places.push(new Place(
					place.id,
					place.name,
					place.latitude,
					place.longitude,
					place.description,
					place.distanceToNiji,
					place.type,
					place.keywords,
					place.options,
					place.openingDays
				));
			}
		}
		return this.places;
	}

	getGoogleMapSettings(): google.maps.MapOptions {
		return places.googleMapSettings as google.maps.MapOptions;
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
