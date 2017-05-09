import { Component, Input } from '@angular/core';

import { Place } from '../shared/place.model';

@Component({
	selector: 'app-place',
	templateUrl: './place.component.html',
	styleUrls: ['./place.component.scss']
})

export class PlaceComponent {
	@Input() place: Place;
}
