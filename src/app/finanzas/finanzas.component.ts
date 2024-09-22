import { Component } from '@angular/core';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent {
  showIngresos: boolean = true; // Inicialmente mostrar ingresos

  chartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: [65, 59, 80, 81, 56, 55, 40, 70, 75, 85, 90, 100],
    label: 'Ingresos Anuales',
    color: '#63c5da'
  };
  
  chartData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: [30, 40, 60, 50, 70, 45, 80, 65, 90, 80, 70, 60], // Datos diferentes
    label: 'Gastos Anuales',
    color: 'rgb(255, 99, 132)'
  };

  chartData3 = {
    labels: ['Plan 1', ' Plan2', 'Plan 3'],
    data: [10,100,50], // Datos diferentes
    label: 'Ingresos por plan',
    color: '#ffca3a'
  };

  toggleGraph(): void {
    this.showIngresos = !this.showIngresos;
  }
}
