import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stats-emprendimiento',
  templateUrl: './stats-emprendimiento.component.html',
  styleUrls: ['./stats-emprendimiento.component.css']
})
export class StatsEmprendimientoComponent implements OnInit {
  ventasVirtual(ventasVirtual: any) {
    throw new Error('Method not implemented.');
  }

  chartDataVentasAnio: any;
  chartVentasPrducto: any;
  datosSueltos: any = {};


  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void { 
    this.loadFinances(1, 2021);
  }

  loadFinances(idEntrepreneurship: number, year: number): void {
    this.dashboardService.getFinances(idEntrepreneurship, year).subscribe(response => {

      this.chartDataVentasAnio = response.chartData1;
      this.chartVentasPrducto = response.chartData2;
      this.datosSueltos = response.summary;
    }, error => {
      //console.error('Error al cargar los datos del dashboard:', error);
    });
  }
}
