import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable()
export class UsersService {
	private currentUser: User;

	constructor(private http: Http) {
		this.restoreCurrentUser();
	}

	private restoreCurrentUser() {
		// Create user from local storage
		let user = JSON.parse(localStorage.getItem('user'));
		if (user && typeof user === 'object') {
			this.currentUser = new User(user.uuid, user.pseudo, user.votes, user.lastUpdate);
			if(!this.currentUser.upToDate()) {
				this.currentUser.refresh();
			}
		}
		// Else, create a new one
		else {
			this.currentUser = new User(this.randomGuid(), 'Anonyme');
		}

		// Save it into the local storage
		this.saveCurrentUser();
	}

	getCurrentUser(): User {
		return this.currentUser;
	}

	saveCurrentUser() {
		localStorage.setItem('user', this.currentUser.toJson());
	}

	postUser(user: User): Promise<boolean> {
		return this.http.post('http://miam-choice.julien-marcou.fr/api/user', user)
			.toPromise()
			.then(response => response.status === 201 ? true : false)
			.catch(error => Promise.reject(error));
	}

	getUsers(): Promise<User[]> {
		return this.http.get('http://miam-choice.julien-marcou.fr/api/users')
			.toPromise()
			.then(response => {
				let users = response.json().users;
				for(let uuid in users) {
					if(users.hasOwnProperty(uuid)) {
						let user = users[uuid];
						users[uuid] = new User(user.uuid, user.pseudo, user.votes, user.lastUpdate);
					}
				}
				users[this.currentUser.uuid] = this.currentUser;
				return users;
			})
			.catch(error =>  Promise.reject(error));
	}

	randomGuid(): string {
		/* tslint:disable */
		let pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
		return pattern.replace(/[xy]/g, function(char) {
			let random = Math.random()*16 | 0;
			let value = char === 'x' ? random : (random&0x3 | 0x8);
			return value.toString(16);
		});
		/* tslint:enable */
	}
}
