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
			map: null,
			title: this.name,
			label: this.id[0].toUpperCase()
		});
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
}
