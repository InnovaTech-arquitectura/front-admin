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
    data: [30, 40, 60, 50, 70, 45, 80, 65, 90, 80, 70, 60],
    label: 'Gastos Anuales',
    color: 'rgb(255, 99, 132)'
  };

  chartData3 = {
    labels: ['Plan 1', ' Plan2', 'Plan 3'],
    data: [10, 100, 50],
    label: 'Ingresos por plan',
    color: '#ffca3a'
  };

  chartData4 = {
    labels: ['Plan 1', 'Plan 2', 'Plan 3'],
    data: [200, 550, 110],
    label: 'Usuarios por plan',
    color: ['#63c5da', 'rgb(255, 99, 132)', '#ffca3a']
  };

  // Añadir filtros de selección de año y mes
  availableYears: number[] = [2020, 2021, 2022, 2023, 2024];
  availableMonths = [
    { name: 'Enero', value: 1 },
    { name: 'Febrero', value: 2 },
    { name: 'Marzo', value: 3 },
    { name: 'Abril', value: 4 },
    { name: 'Mayo', value: 5 },
    { name: 'Junio', value: 6 },
    { name: 'Julio', value: 7 },
    { name: 'Agosto', value: 8 },
    { name: 'Septiembre', value: 9 },
    { name: 'Octubre', value: 10 },
    { name: 'Noviembre', value: 11 },
    { name: 'Diciembre', value: 12 }
  ];

  anioSeleccionado: number = new Date().getFullYear();
  mesSeleccionado: number = new Date().getMonth() + 1; // Mes actual

  onSubmit(): void {
    // Aquí puedes actualizar los datos según la selección de año y mes
    console.log('Año seleccionado:', this.anioSeleccionado);
    console.log('Mes seleccionado:', this.mesSeleccionado);

    // Lógica para actualizar los datos de las gráficas basados en la selección
    // ...
  }

  // Cálculos de las sumas
  valorTarjeta1: number = this.sumarValores(this.chartData1.data); // Suma de ingresos
  valorTarjeta2: number = this.sumarValores(this.chartData2.data); // Suma de gastos

  // Función para sumar los valores de un array
  sumarValores(data: number[]): number {
    return data.reduce((total, valor) => total + valor, 0);
  }

  toggleGraph(): void {
    this.showIngresos = !this.showIngresos;
  }
}
