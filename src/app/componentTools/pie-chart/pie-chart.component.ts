import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnChanges {
  @Input() chartData: { labels: string[]; data: number[]; label: string; color: string[] } | null = null;
  @ViewChild('pieChartCanvas', { static: true }) pieChartCanvas!: ElementRef;
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
        backgroundColor: this.chartData?.color,
        borderColor: this.chartData?.color.map(color => color.replace('rgba', 'rgb')), // Si necesitas que el borde sea rgb
        borderWidth: 1
      }]
    };

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.pieChartCanvas.nativeElement, {
      type: 'pie' as ChartType, // Tipo de gráfico: pie
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.raw || 0;
                return `${label}: ${value}`;
              }
            }
          }
        }
      }
    });
  }
}
