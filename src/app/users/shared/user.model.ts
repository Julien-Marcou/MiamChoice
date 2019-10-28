import { Place } from '../../places/shared/place.model';

export class User {
    uuid: string;
    pseudo: string;
    votes: {};
    lastUpdate: string;

    constructor(uuid: string, pseudo: string, votes?: {}, lastUpdate?: string) {
        this.uuid = uuid;
        this.pseudo = pseudo;
        this.votes = votes || {};
        this.lastUpdate = lastUpdate || this.today();

        if (typeof this.votes !== 'object') {
            this.votes = {};
        }
    }

    votedFor(place: Place) {
        return this.votes[place.id] === true;
    }

    upToDate(): boolean {
        return this.lastUpdate === this.today();
    }

    refresh() {
        this.votes = {};
        this.lastUpdate = this.today();
    }

    toJson(): string {
        return JSON.stringify({
            uuid: this.uuid,
            pseudo: this.pseudo,
            votes: this.votes,
            lastUpdate: this.lastUpdate,
        });
    }

    private today(): string {
        let today = new Date();
        let month = '' + (today.getMonth() + 1);
        let day = '' + today.getDate();
        let year = today.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        return year + '-' + month + '-' + day;
    }
}
