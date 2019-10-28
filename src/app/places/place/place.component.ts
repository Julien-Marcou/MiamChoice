import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Place } from '../shared/place.model';

@Component({
    selector: 'app-place',
    templateUrl: './place.component.html',
    styleUrls: ['./place.component.scss'],
})

export class PlaceComponent {
    @Output() placeSelect: EventEmitter<Place> = new EventEmitter();
    @Input() place: Place;

    selectOnMap($event) {
        $event.preventDefault();
        this.placeSelect.emit(this.place);
    }
}
