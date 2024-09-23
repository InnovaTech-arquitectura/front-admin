import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-stats-emprendimiento',
  templateUrl: './stats-emprendimiento.component.html',
  styleUrls: ['./stats-emprendimiento.component.css']
})
export class StatsEmprendimientoComponent implements OnInit {

  public chart: Chart | undefined;
  public chart2: Chart | undefined;

  ngOnInit(): void {
    
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [{
        label: '2021',
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
        backgroundColor: [
          'rgba(135, 188, 222)',
        ],
        fill: false,
        borderColor:
          'rgb(135, 188, 222)',
        tension: 0.1
      },
      {
        label: '2022',
        data: [45, 47, 72, 69, 44, 33, 77, 12, 98, 103, 55, 23],
        backgroundColor: [
          'rgba(255, 202, 58)',
        ],
        fill: false,
        borderColor:
          'rgb(255, 202, 58)',
        tension: 0.1
      }
    ]      
    };

    const data2 = {
      labels: ['Producto A', 'Producto B', 'Producto C', 'Producto D', 'Producto E'],
      datasets: [{
        label: 'Ventas 2021',
        data: [300, 500, 400, 350, 250],
        Color: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#2ecc71'],
      }
    ]      
    };

    this.chart = new Chart('chart', {
      type: 'line',
      data: data
    });

    this.chart2 = new Chart('chart2', {
      type: 'pie' as ChartType,
      data: data2
    });

  }

}
