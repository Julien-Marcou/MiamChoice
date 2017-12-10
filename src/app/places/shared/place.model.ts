export class Place {
	id: string;
	name: string;
	latitude: number;
	longitude: number;
	description: string;
	distanceToNiji: number;
	type: string;
	keywords: string[];
	options: string[];
	openingDays: string[];
	marker: any;

	constructor(id: string, name: string, latitude: number, longitude: number, description: string, distanceToNiji: number, type: string, keywords: string[], options: string[], openingDays) {
		this.id = id;
		this.name = name;
		this.latitude = latitude;
		this.longitude = longitude;
		this.description = description;
		this.distanceToNiji = distanceToNiji;
		this.type = type;
		this.keywords = keywords;
		this.options = options;
		this.openingDays = openingDays;
		this.marker = new google.maps.Marker({
			position: {
				lat: this.latitude,
				lng: this.longitude
			},
			title: this.name,
			label: this.id[0].toUpperCase()
		});

		if(this.id === 'niji') {
			this.marker.setIcon({
				url: '/assets/img/blue-marker.png',
				labelOrigin: new google.maps.Point(11, 12)
			});
			this.marker.setShape({
				coords: [8, 0, 5, 1, 4, 2, 3, 3, 2, 4, 2, 5, 1, 6, 1, 7, 0, 8, 0, 14, 1, 15, 1, 16, 2, 17, 2, 18, 3, 19, 3, 20, 4, 21, 5, 22, 5, 23, 6, 24, 7, 25, 7, 27, 8, 28, 8, 29, 9, 30, 9, 33, 10, 34, 10, 40, 11, 40, 11, 34, 12, 33, 12, 30, 13, 29, 13, 28, 14, 27, 14, 25, 15, 24, 16, 23, 16, 22, 17, 21, 18, 20, 18, 19, 19, 18, 19, 17, 20, 16, 20, 15, 21, 14, 21, 8, 20, 7, 20, 6, 19, 5, 19, 4, 18, 3, 17, 2, 16, 1, 14, 1, 13, 0, 8, 0],
				type: 'poly'
			});
		}
	}

	match(types: any[], options: any[], days: any[], radius: number, keywords: string[]) {
		let typesMatch = false;
		let optionsMatch = false;
		let daysMatch = false;
		let distanceMatch = this.distanceToNiji <= radius;
		let keywordsMatch = keywords.length === 0 ? true : false;

		for(let type of types) {
			if(this.type === type.key) {
				typesMatch = true;
				break;
			}
		}
		for(let option of options) {
			if(this.options.contains(option.key)) {
				optionsMatch = true;
				break;
			}
		}
		for(let day of days) {
			if(this.openingDays.contains(day.key)) {
				daysMatch = true;
				break;
			}
		}
		for(let keyword of keywords) {
			if(this.keywords.contains(keyword)) {
				keywordsMatch = true;
				break;
			}
		}

		return typesMatch && optionsMatch && daysMatch && distanceMatch && keywordsMatch;
	}

	isOpen(weekDay) {
		return this.openingDays.contains(weekDay);
	}
}
