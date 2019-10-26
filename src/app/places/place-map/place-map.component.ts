import { Component, OnChanges, OnDestroy, ViewChild, Input } from '@angular/core';

import { Place } from '../shared/place.model';
import { PlacesService } from '../shared/places.service';

@Component({
	selector: 'app-place-map',
	templateUrl: './place-map.component.html',
	styleUrls: ['./place-map.component.scss']
})

export class PlaceMapComponent implements OnChanges, OnDestroy {
	@ViewChild('map', {static: true}) mapElement;

	@Input() allPlaces: Place[] = [];
	@Input() displayedPlaces: Place[] = [];

	googleMapSettings: google.maps.MapOptions;
	googleMap: google.maps.Map;
	infoWindow: google.maps.InfoWindow;

	constructor(private placesService: PlacesService) {
		this.googleMapSettings = this.placesService.getGoogleMapSettings();
	}

	ngOnChanges() {
		this.renderGoogleMap();
	}

	ngOnDestroy() {
		this.infoWindow.setContent(null);
		this.infoWindow.close();
		for(let place of this.allPlaces) {
			google.maps.event.clearInstanceListeners(place.marker);
		}
	}

	renderGoogleMap() {
		if(!this.googleMap) {
			this.googleMap = new google.maps.Map(this.mapElement.nativeElement, this.googleMapSettings);
		}

		if(!this.infoWindow) {
			this.infoWindow = new google.maps.InfoWindow();
			for(let place of this.allPlaces) {
				place.marker.addListener('click', () => {
					this.openInfoWindowOnPlace(place);
				});
			}
		}

		for(let place of this.allPlaces) {
			if(this.displayedPlaces.contains(place)) {
				if(place.marker.getMap() !== this.googleMap) {
					place.marker.setMap(this.googleMap);
				}
			}
			else {
				place.marker.setMap(null);
			}
		}

		if(!this.displayedPlaces.isEmpty()) {
			this.centerOnPlaces(this.displayedPlaces);
		}
	}

	openInfoWindowOnPlace(place: Place) {
		this.infoWindow.setContent(place.name);
		this.infoWindow.open(this.googleMap, place.marker);
	}

	centerOnPlace(place: Place) {
		let bounds = new google.maps.LatLngBounds();
		bounds.extend(place.marker.getPosition());
		this.googleMap.fitBounds(bounds);

		this.openInfoWindowOnPlace(place);

		window.scrollTo(0, this.mapElement.nativeElement.offsetTop - 15);
	}

	centerOnPlaces(places: Place[]) {
		let bounds = new google.maps.LatLngBounds();
		for(let place of places) {
			bounds.extend(place.marker.getPosition());
		}
		this.googleMap.fitBounds(bounds);
	}
}
