import { Component, OnInit } from '@angular/core';
import { FinanzasService } from '../service/finanzas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent implements OnInit {
  showIncome: boolean = true;
  loading: boolean = false; // Nueva variable para manejar el estado de carga

  // Variables para almacenar los datos obtenidos de la API
  totalIncomeValue: number = 0; // Ingresos Totales
  totalExpensesValue: number = 0; // Egresos Totales
  incomeChartData: any = {}; // Datos para la gráfica de ingresos
  expensesChartData: any = {}; // Datos para la gráfica de egresos
  incomeByPlanChartData: any = {}; // Datos para ingresos por plan
  usersByPlanChartData: any = {}; // Datos para usuarios por plan

  availableYears: number[] = []; // Lista de años disponibles
  selectedYear: number = new Date().getFullYear(); // Año seleccionado por defecto es el actual

  constructor(private finanzasService: FinanzasService) { }

  ngOnInit(): void {
    this.loadAvailableYears();
    this.updateData(this.selectedYear); // Cargar datos para el año actual al iniciar
  }

  loadAvailableYears(): void {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 2020; i--) { // Solo años desde 2020 en adelante
      this.availableYears.push(i);
    }
  }

  updateData(year: number): void {
    this.loading = true; // Activar el estado de carga

    // Obtener ingresos y gastos por año
    this.finanzasService.getIncomeByYear(year).subscribe(
      data => {
        this.incomeChartData = {
          ...data,
          color: '#63c5da', // Color para la gráfica de ingresos
        };
        this.totalIncomeValue = this.sumValues(data.data); // Sumar los ingresos totales
      },
      error => {
        console.error('Error al obtener ingresos:', error);
        this.showError();
      }
    );

    this.finanzasService.getExpensesByYear(year).subscribe(
      data => {
        this.expensesChartData = {
          ...data,
          color: 'rgb(255, 99, 132)', // Color para la gráfica de egresos
        };
        this.totalExpensesValue = this.sumValues(data.data); // Sumar los gastos totales
      },
      error => {
        console.error('Error al obtener egresos:', error);
        this.showError();
      }
    );

    // Obtener ingresos por plan
    this.finanzasService.getIncomeByPlan(year).subscribe(
      data => {
        this.incomeByPlanChartData = {
          ...data,
          color: '#ffca3a' // Color para ingresos por plan
        };
      },
      error => {
        console.error('Error al obtener ingresos por plan:', error);
        this.showError();
      }
    );

    // Obtener usuarios por plan
    this.finanzasService.getUsersByPlan(year).subscribe(
      data => {
        this.usersByPlanChartData = {
          ...data,
          color: ['#63c5da', 'rgb(255, 99, 132)', '#ffca3a'] // Colores para usuarios por plan
        };
      },
      error => {
        console.error('Error al obtener usuarios por plan:', error);
        this.showError();
      }
    ).add(() => this.loading = false); // Desactivar el estado de carga una vez que se completa
  }

  onSubmit(): void {
    this.updateData(this.selectedYear); // Actualiza los datos financieros según el año seleccionado
  }

  toggleGraph(): void {
    this.showIncome = !this.showIncome;
  }

  // Función para sumar los valores de un array
  sumValues(data: number[]): number {
    return data.reduce((total, value) => total + value, 0);
  }

  // Función para mostrar una alerta en caso de error
  showError(): void {
    Swal.fire({
      icon: 'error',
      title: 'Error de autenticación',
      text: 'No se pudo obtener la información. Por favor, intenta nuevamente.',
      confirmButtonText: 'Cerrar'
    });
  }
}
