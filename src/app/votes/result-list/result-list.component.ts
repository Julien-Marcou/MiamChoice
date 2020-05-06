import {Component, Input, OnChanges} from '@angular/core';
import {Place} from '../../places/shared/place.model';
import {Vote} from '../shared/vote.model';

@Component({
    selector: 'app-result-list',
    templateUrl: './result-list.component.html',
    styleUrls: ['./result-list.component.scss'],
})

export class ResultListComponent implements OnChanges {
    @Input() places: Place[];
    @Input() users: {};

    votes: Vote[] = [];
    chartConfig: any;

    ngOnChanges() {
        this.updateResults();
    }

    updateResults() {
        this.chartConfig = {
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    data: [],
                }],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1,
                        },
                    }],
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                },
                maintainAspectRatio: false,
            },
        };
        this.votes = [];
        for (let place of this.places) {
            let vote = new Vote(place);
            for (let uuid in this.users) {
                if (this.users.hasOwnProperty(uuid)) {
                    let user = this.users[uuid];
                    if (user.votedFor(place)) {
                        vote.addUser(user);
                    }
                }
            }
            if (!vote.hasVote()) {
                this.chartConfig.data.labels.push(place.name);
                this.chartConfig.data.datasets[0].data.push(vote.users.length);
                this.votes.push(vote);
            }
        }

    }
}
