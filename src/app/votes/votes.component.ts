import {Component, ViewChild} from '@angular/core';

import {Place} from '../places/shared/place.model';
import {User} from '../users/shared/user.model';
import {PlacesService} from '../places/shared/places.service';
import {UsersService} from '../users/shared/users.service';
import {ResultListComponent} from './result-list/result-list.component';

@Component({
    templateUrl: './votes.component.html',
    styleUrls: ['./votes.component.scss'],
})

export class VotesComponent {
    @ViewChild(ResultListComponent, {static: false}) resultsComponent: ResultListComponent;

    places: Place[];
    users: {};
    user: User;

    constructor(private placesService: PlacesService, private usersService: UsersService) {
        this.places = this.placesService.getPlaces();
        this.users = {};
        this.user = this.usersService.getCurrentUser();

        this.usersService.getUsers().then(users => this.users = users);
    }

    onVoteSubmit() {
        this.usersService.postUser(this.user).then(response => {
            if (response.error) {
                alert(response.message);
            } else {
                this.usersService.saveCurrentUser();
                this.resultsComponent.updateResults();
            }
        });
    }
}
