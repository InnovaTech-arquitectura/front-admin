import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from 'src/app/model/events';
import { EventsService } from 'src/app/service/events.service';

@Component({
	selector: 'app-editar-bazar',
	templateUrl: './editar-bazar.component.html',
	styleUrls: ['./editar-bazar.component.css']
})
export class EditarBazarComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private eventService: EventsService,
		private router: Router
	) {
		this.formEvent = {
			id: 0,
			name: '',
			date: new Date(),
			place: '',
			modality: '',
			costoLocal: 0,
			total_Cost: 0,
			earnings: 0,
			quota: 0
		};
	}
	formEvent: Events;

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			const id = Number(params.get('id'));

			this.eventService.findById(id).subscribe((data) => {
				this.formEvent = data;
				console.log('Evento a editar:', this.formEvent);
			});
		});
	}

	editar() {
		this.formEvent = Object.assign({}, this.formEvent);
		
		this.eventService.updateEvent(this.formEvent).subscribe(
			(response) => {
				console.log('Evento actualizado con éxito:', response);
				// Redirigir solo después de que la actualización sea exitosa
				this.router.navigate(['/bazares']);
			},
			(error) => {
				console.error('Error al actualizar el evento:', error);
				// Aquí podrías manejar el error, mostrar una alerta o mensaje al usuario
			}
		);
	}
}
