import {AfterViewInit, Directive, ElementRef, Input, OnChanges} from '@angular/core';
import {Chart} from 'chart.js';

@Directive({selector: '[appChart]'})
export class ChartDirective implements AfterViewInit, OnChanges {
    @Input() config: any;

    element: ElementRef;
    canvas: HTMLCanvasElement;
    chart: Chart;

    constructor(element: ElementRef) {
        this.element = element;
    }

    ngAfterViewInit() {
        this.canvas = document.createElement('canvas');
        this.canvas.height = 300;
        this.element.nativeElement.appendChild(this.canvas);
        this.updateChart();
    }

    ngOnChanges() {
        this.updateChart();
    }

    updateChart() {
        if (this.canvas && this.config) {
            if (!this.chart) {
                this.chart = new Chart(this.canvas.getContext('2d'), this.config);
            }
            else {
                this.chart.config = this.config;
                this.chart.update();
            }
        }
    }

}
