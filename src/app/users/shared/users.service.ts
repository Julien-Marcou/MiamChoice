import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';

@Injectable()
export class UsersService {
    private currentUser: User;

    constructor(private http: HttpClient) {
        this.restoreCurrentUser();
    }

    private restoreCurrentUser() {
        // Create user from local storage
        let user = JSON.parse(localStorage.getItem('user'));
        if (user && typeof user === 'object') {
            this.currentUser = new User(user.uuid, user.pseudo, user.votes, user.lastUpdate);
            if (!this.currentUser.upToDate()) {
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

    postUser(user: User): Promise<any> {
        user.pseudo = user.pseudo.trim();
        return this.http.post('https://miam-choice.julien-marcou.fr/api/user', user)
            .toPromise()
            .catch(error => {
                let response = error.json();
                if (response.error && response.message) {
                    return response;
                }
                Promise.reject(error);
            });
    }

    getUsers(): Promise<User[]> {
        return this.http.get('https://miam-choice.julien-marcou.fr/api/users')
            .toPromise()
            .then((users: any) => {
                let mappedUsers = [];
                for (let uuid in users.users) {
                    if (users.users.hasOwnProperty(uuid)) {
                        let user = users.users[uuid];
                        mappedUsers[uuid] = new User(user.uuid, user.pseudo, user.votes, user.lastUpdate);
                    }
                }
                return mappedUsers;
            })
            .catch(error => Promise.reject(error));
    }

    randomGuid(): string {
        // tslint:disable:no-bitwise
        let pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        return pattern.replace(/[xy]/g, function (char) {
            let random = Math.random() * 16 | 0;
            let value = char === 'x' ? random : (random & 0x3 | 0x8);
            return value.toString(16);
        });
        // tslint:enable:no-bitwise
    }
}
