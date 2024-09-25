import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'src/app/model/events'; // Importa Events desde tu archivo de modelo
import { EventsService } from 'src/app/service/events.service';

@Component({
	selector: 'app-crear-bazar',
	templateUrl: './crear-bazar.component.html',
	styleUrls: ['./crear-bazar.component.css']
})
export class CrearBazarComponent implements OnInit {
	constructor(
		private eventService: EventsService,
		private router: Router
	) {
		this.sendEvent = {
			id: 0,
			name: '',
			date: new Date('2024-01-01'),
			place: '',
			modality: '',
			costoLocal: 0,
			total_Cost: 0,
			earnings: 0,
			quota: 0
		};

		this.formEvent = {
			id: 0,
			name: '',
			date: new Date('2024-01-01'),
			place: '',
			modality: '',
			costoLocal: 0,
			total_Cost: 0,
			earnings: 0,
			quota: 0
		};
	}

	sendEvent: Events;
	formEvent: Events;

	ngOnInit(): void {
		this.eventService.findAll().subscribe((data) => {
			console.log('Eventos cargados:', data);
		});
	}

	crear() {
		this.sendEvent = Object.assign({}, this.formEvent);
		console.log('Evento a crear:', this.sendEvent);

		this.eventService.addEvent(this.sendEvent).subscribe(
			(response) => {
				console.log('Evento creado con éxito:', response);
				this.router.navigate(['/bazares']);
			},
			(error) => {
				console.error('Error al crear el evento:', error);
			}
		);
	}
}
