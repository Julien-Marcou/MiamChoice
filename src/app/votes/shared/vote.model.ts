import { Place } from '../../places/shared/place.model';
import { User } from '../../users/shared/user.model';

export class Vote {
	place: Place;
	users: User[];

	constructor(place: Place, users: User[] = []) {
		this.place = place;
		this.users = users;
	}

	hasUser(user: User): boolean {
		return this.users.contains(user);
	}

	addUser(user: User) {
		if(!this.hasUser(user)) {
			this.users.push(user);
		}
	}

	isEmpty(): boolean {
		return this.users.isEmpty();
	}
}
