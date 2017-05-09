import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VotesRoutingModule } from './votes-routing.module';
import { ChartDirective } from './shared/chart.directive';
import { VotesComponent } from './votes.component';
import { VoteFormComponent } from './vote-form/vote-form.component';
import { ResultListComponent } from './result-list/result-list.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,
		VotesRoutingModule
	],
	declarations: [
		ChartDirective,
		VotesComponent,
		VoteFormComponent,
		ResultListComponent
	]
})

export class VotesModule { }
