import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

import { PlacesService } from '../shared/places.service';

@Component({
	selector: 'app-place-filters',
	templateUrl: './place-filters.component.html',
	styleUrls: ['./place-filters.component.scss']
})

export class PlaceFiltersComponent {
	@Output() filterChange: EventEmitter<any> = new EventEmitter();

	types: any[];
	options: any[];
	days: any[];
	radius = 5000;
	keywords = '';

	searchInput = new FormControl();

	constructor(private placesService: PlacesService) {
		this.types = placesService.getPlaceTypes();
		for(let type of this.types) {
			type.checked = true;
		}

		this.options = placesService.getPlaceOptions();
		for(let option of this.options) {
			option.checked = true;
		}

		this.days = placesService.getPlaceDays();
		for(let day of this.days) {
			day.checked = false;
		}

		let today = new Date();
		let weekDay = (today.getDay() + 6) % 7; // First day of the week is Monday in France
		this.days[weekDay].checked = true;
		this.days[weekDay].isToday = true;

		this.searchInput.valueChanges.pipe(
			debounceTime(400),
			distinctUntilChanged()
		).subscribe(keywords => {
			this.keywords = keywords;
			this.keywordsChange();
		});

		this.filterChange.emit();
	}

	typeChange() {
		this.filterChange.emit();
	}

	optionChange() {
		this.filterChange.emit();
	}

	dayChange() {
		this.filterChange.emit();
	}

	radiusChange() {
		this.filterChange.emit();
	}

	keywordsChange() {
		this.filterChange.emit();
	}

	getSelectedTypes(): any[] {
		return this.types.filter((type) => {
			return type.checked;
		});
	}

	getSelectedOptions(): any[] {
		return this.options.filter((option) => {
			return option.checked;
		});
	}

	getSelectedDays(): any[] {
		return this.days.filter((day) => {
			return day.checked;
		});
	}

	getRadius(): number {
		return this.radius;
	}

	getKeywords(): string[] {
		return this.keywords.trim().split(/(\s+)/).filter((keyword) => {
			return keyword.length > 0;
		});
	}
}
