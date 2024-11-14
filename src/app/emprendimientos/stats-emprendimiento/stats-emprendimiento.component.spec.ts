import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stats-emprendimiento',
  templateUrl: './stats-emprendimiento.component.html',
  styleUrls: ['./stats-emprendimiento.component.css']
})
export class StatsEmprendimientoComponent implements OnInit {
  
  chartDataVentasAnio: any;
  chartVentasPrducto: any;
  datosSueltos: any = {};  // Inicializado como un objeto vacío para evitar errores al acceder

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void { 
    this.loadFinances(1, 2021);
  }

  loadFinances(idEntrepreneurship: number, year: number): void {
    this.dashboardService.getFinances(idEntrepreneurship, year).subscribe(response => {

      // Asignar los datos de la respuesta a las variables correspondientes
      this.chartDataVentasAnio = response.chartData1;
      this.chartVentasPrducto = response.chartData2;
      this.datosSueltos = response.summary;  // Asignar los datos sueltos

    }, error => {
      // Manejar el error en caso de que la API falle
      //console.error('Error al cargar los datos del dashboard:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudieron cargar los datos de las finanzas.'
      });
    });
  }
}
