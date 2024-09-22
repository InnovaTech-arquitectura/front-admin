import { Component } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent {

  chartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: [50, 45, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
    label: 'Emprendedores Registrados',
    color: '#42a5f5'
  };

  chartData2 = {
    labels: ['Emprendedor A', 'Emprendedor B', 'Emprendedor C', 'Emprendedor D', 'Emprendedor E'],
    data: [3000, 5000, 4000, 3500, 2500],
    label: 'Ventas Totales',
    color: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#2ecc71']
  };

  chartData3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: [12000, 15000, 16000, 18000, 20000, 22000, 25000, 27000, 30000, 32000, 35000, 38000],
    label: 'Ingresos Totales Generados',
    color: '#63c5da'
  };

  chartData4 = {
    labels: ['Suscripción Básica', 'Suscripción Premium', 'Suscripción VIP'],
    data: [400, 300, 100],
    label: 'Suscripciones Activas',
    color: ['#f39c12', '#e74c3c', '#3498db'] 
  };

  chartData5 = {
    labels: ['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4', 'Evento 5'],
    data: [200, 180, 220, 160, 250],
    label: 'Participación en Eventos',
    color: '#8e44ad'
  };
}
