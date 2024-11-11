import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges {
  @Input() chartData: { labels: string[]; data: number[]; label: string; color: string } | null = null;
  @ViewChild('barChartCanvas', { static: true }) barChartCanvas!: ElementRef;
  public chart!: Chart;

  ngOnChanges() {
    if (this.chartData && this.chartData.data && Array.isArray(this.chartData.data)) {
      this.createChart(); // Solo crea el gráfico si los datos están disponibles y son válidos
    } else {
      //console.error('No hay datos disponibles para el gráfico');
    }
  }

  createChart(): void {
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
    const suggestedMax = maxValue + 10; // Margen en el eje Y

    this.chart = new Chart(this.barChartCanvas.nativeElement, {
      type: 'bar' as ChartType,
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true, // Esto hace que el eje Y comience desde 0
            suggestedMax: suggestedMax // Sugerir el máximo calculado
          }
        }
      }
    });
  }
}
