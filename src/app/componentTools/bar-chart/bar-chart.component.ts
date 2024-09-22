import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() chartData: any;
  public chart!: Chart;

  ngOnInit(): void {
    this.createChart();
  }

  ngOnChanges(): void {
    this.createChart();
  }

  createChart(): void {
    if (!this.chartData) {
      console.warn('chartData is undefined');
      return; // Exit if chartData is not defined
    }
    const data = {
      labels: this.chartData?.labels,
      datasets: [{
        label: this.chartData?.label,
        data: this.chartData?.data,
        backgroundColor: this.chartData?.color || 'rgba(75, 192, 192, 0.5)', // Color de fondo
        borderColor: this.chartData?.color || 'rgb(75, 192, 192)',
        borderWidth: 1 // Ancho del borde
      }]
    };

    if (this.chart) {
      this.chart.destroy();
    }
    // Calcular el valor máximo y agregar un margen
    const maxValue = Math.max(...this.chartData.data);
    const suggestedMax = maxValue + 10; 

    this.chart = new Chart('bar-chart', {
      type: 'bar' as ChartType, // Tipo de gráfico: barra
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true, // Comienza desde cero
            suggestedMax: suggestedMax
          }
        }
      }
    });
  }
}
