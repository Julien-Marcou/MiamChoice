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
                lng: this.longitude,
            },
            title: this.name,
            label: this.id[0].toUpperCase(),
        });

        if (this.id === 'niji') {
            this.marker.setIcon({
                url: '/assets/img/blue-marker.png',
                labelOrigin: new google.maps.Point(13, 14),
                scaledSize: new google.maps.Size(27, 43),
            });
            this.marker.setShape({
                coords: [13.5, 0, 4, 3.75, 0, 13.5, 13.5, 43, 27, 13.5, 23, 3.75],
                type: 'poly',
            } as google.maps.MarkerShapePoly);
        }
    }

    match(types: any[], options: any[], days: any[], radius: number, keywords: string[]) {
        let typesMatch = false;
        let optionsMatch = false;
        let daysMatch = false;
        let distanceMatch = this.distanceToNiji <= radius;
        let keywordsMatch = keywords.length === 0 ? true : false;

        for (let type of types) {
            if (this.type === type.key) {
                typesMatch = true;
                break;
            }
        }
        for (let option of options) {
            if (this.options.includes(option.key)) {
                optionsMatch = true;
                break;
            }
        }
        for (let day of days) {
            if (this.openingDays.includes(day.key)) {
                daysMatch = true;
                break;
            }
        }
        for (let keyword of keywords) {
            if (this.keywords.includes(keyword)) {
                keywordsMatch = true;
                break;
            }
        }

        return typesMatch && optionsMatch && daysMatch && distanceMatch && keywordsMatch;
    }

    isOpen(weekDay) {
        return this.openingDays.includes(weekDay);
    }
}
