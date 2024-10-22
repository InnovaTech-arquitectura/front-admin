import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from 'src/app/model/events';
import { EventsService } from 'src/app/service/events.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-editar-bazar',
	templateUrl: './editar-bazar.component.html',
	styleUrls: ['./editar-bazar.component.css']
})
export class EditarBazarComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private eventService: EventsService,
		private router: Router,
		private fb: FormBuilder
	) {
		this.formEvent = {
			id: 0,
			name: '',
			date: new Date(),
			date2: new Date(),
			place: '',
			modality: '',
			totalCost: 0,
			costoLocal: 0,
			earnings: 0,
			quota: 0,
			description: ''
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
		const eventToUpdate = {
			id: this.formEvent.id,
			name: this.formEvent.name,
			date: this.formEvent.date,
			date2: this.formEvent.date2,
			totalCost: this.formEvent.totalCost,
			earnings: this.formEvent.earnings,
			costoLocal: this.formEvent.costoLocal,
			place: this.formEvent.place.toString(),
			modality: this.formEvent.modality,
			quota: this.formEvent.quota,
			description: this.formEvent.description,
			entrepreneurshipeventregistry: []
		};
		this.eventService.updateEvent(eventToUpdate).subscribe(
			(response) => {
				console.log('Evento actualizado con éxito:', response);
				this.router.navigate(['/bazares']);
			},
			(error) => {
				console.error('Error al actualizar el evento:', error);
			}
		);
	}
}
