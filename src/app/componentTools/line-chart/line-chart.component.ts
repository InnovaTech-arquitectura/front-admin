import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnChanges {
  @Input() chartData: { labels: string[]; data: number[]; label: string; color: string } | null = null;
  @ViewChild('lineChartCanvas', { static: true }) lineChartCanvas!: ElementRef;
  public chart!: Chart;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && this.chartData) {
      this.createChart();
    }
  }

  createChart(): void {
    const data = {
      labels: this.chartData?.labels,
      datasets: [{
        label: this.chartData?.label,
        data: this.chartData?.data,
        fill: false,
        borderColor: this.chartData?.color || 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
  
    if (this.chart) {
      this.chart.destroy();
    }

    // Calcular el valor máximo y agregar un margen
    const maxValue = Math.max(...this.chartData.data);
    const suggestedMax = maxValue + 10; 
  
    this.chart = new Chart(this.lineChartCanvas.nativeElement, {
      type: 'line' as ChartType,
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true, // Esto hace que el eje Y comience desde 0
            suggestedMax: suggestedMax
          }
        }
      }
    });
  }
}
