import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Place } from '../../places/shared/place.model';
import { User } from '../../users/shared/user.model';

@Component({
	selector: 'app-vote-form',
	templateUrl: './vote-form.component.html',
	styleUrls: ['./vote-form.component.scss']
})

export class VoteFormComponent {
	@Output() voteSubmit: EventEmitter<any> = new EventEmitter();

	@Input() places: Place[];
	@Input() user: User;

	onSubmit() {
		this.voteSubmit.emit();
	}
}
