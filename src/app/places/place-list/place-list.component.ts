import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Place } from '../shared/place.model';

@Component({
	selector: 'app-place-list',
	templateUrl: './place-list.component.html',
	styleUrls: ['./place-list.component.scss']
})

export class PlaceListComponent {
	@Output() placeSelect: EventEmitter<Place> = new EventEmitter();
	@Input() places: Place[];

	onPlaceSelect(place: Place) {
		this.placeSelect.emit(place);
	}
}
