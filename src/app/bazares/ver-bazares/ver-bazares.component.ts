import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';
import { Events } from 'src/app/model/events';

@Component({
	selector: 'app-ver-bazares',
	templateUrl: './ver-bazares.component.html',
	styleUrls: ['./ver-bazares.component.css']
})
export class VerBazaresComponent implements OnInit {
	bazares: Events[] = [];

	constructor(private eventsService: EventsService) {}

	ngOnInit(): void {
		this.loadBazares();
	}

	loadBazares(): void {
		this.eventsService.findAll().subscribe(
			(response: any) => {
				this.bazares = response.content; // Adjust this line to fit your actual response structure
				console.log('Bazares cargados:', this.bazares);
			},
			(error) => {
				console.error('Error al cargar los bazares:', error);
			}
		);
	}

	delete(id: number) {
		// Llama a la función deleteEvent del servicio
		const index = this.bazares.findIndex((plan) => plan.id === id);
    	this.bazares.splice(index, 1);

		this.eventsService.deleteEvent(id).subscribe(
		  (response) => {
			console.log('Evento eliminado con éxito:', response);
			// Aquí puedes realizar cualquier acción adicional, como actualizar la UI
		  },
		  (error) => {
			console.error('Error al eliminar el evento:', error);
			// Manejar el error, por ejemplo mostrar un mensaje de error en la UI
		  }
		);
	  }
}
