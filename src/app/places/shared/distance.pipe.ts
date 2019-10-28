import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'distance'})
export class DistancePipe implements PipeTransform {
    transform(value: number, trailingZeroForKm: boolean = false): string {
        let unit = 'm';
        if (value >= 1000) {
            value = value / 1000;
            unit = 'km';
        }
        let distance = value.toString();
        if (distance.length === 1 && unit === 'km' && trailingZeroForKm) {
            distance += '.0';
        }
        return distance + unit;
    }
}
