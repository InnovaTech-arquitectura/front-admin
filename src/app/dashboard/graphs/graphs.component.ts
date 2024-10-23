import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  // Definir variables para los datos del dashboard
  chartData1: any;
  chartData2: any;
  chartData3: any;
  chartData4: any;
  chartData5: any;

  constructor(private dashboardService: DashboardService) { }

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.loadGeneralStats(1, 2021);  // Cargar los datos (puedes cambiar el año o id como sea necesario)
  }

  // Método para cargar los datos del backend
  loadGeneralStats(idEntrepreneurship: number, year: number): void {
    this.dashboardService.getGeneralStats(idEntrepreneurship, year).subscribe(response => {
      // Asignar los datos del backend a las variables locales
      this.chartData1 = response.chartData1;
      this.chartData2 = response.chartData2;
      this.chartData3 = response.chartData3;
      this.chartData4 = response.chartData4;
      this.chartData5 = response.chartData5;
    }, error => {
      console.error('Error al cargar los datos del dashboard:', error);
    });
  }
}
