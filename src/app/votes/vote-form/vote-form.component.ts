import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Place } from '../../places/shared/place.model';
import { User } from '../../users/shared/user.model';

import { PlacesService } from '../../places/shared/places.service';

@Component({
    selector: 'app-vote-form',
    templateUrl: './vote-form.component.html',
    styleUrls: ['./vote-form.component.scss'],
})

export class VoteFormComponent {
    @Output() voteSubmit: EventEmitter<any> = new EventEmitter();

    @Input() places: Place[];
    @Input() user: User;

    public weekDay: string;

    constructor(private placesService: PlacesService) {
        let days = placesService.getPlaceDays();
        let today = new Date();
        let weekDayIndex = (today.getDay() + 6) % 7; // First day of the week is Monday in France
        this.weekDay = days[weekDayIndex].key;
    }

    onSubmit() {
        this.voteSubmit.emit();
    }
}
