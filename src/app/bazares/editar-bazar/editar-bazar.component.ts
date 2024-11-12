import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from 'src/app/model/events';
import { EventsService } from 'src/app/service/events.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
				//console.log('Evento a editar:', this.formEvent);
			});
		});
	}

	/*editar() {
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
				//console.log('Evento actualizado con éxito:', response);
				Swal.fire('Guardado', 'El bazar ha sido modificado', 'success');
				this.router.navigate(['/bazares']);
			},
			(error) => {
				//console.error('Error al actualizar el evento:', error);
			}
		);
	}*/
	editar(): void {
		const startDate = new Date(this.formEvent.date);
		const endDate = new Date(this.formEvent.date2);
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		if (startDate < today) {
			Swal.fire('Error', 'La fecha de inicio debe ser mayor a la fecha actual', 'error');
			return;
		}

		if (endDate <= startDate) {
			Swal.fire('Error', 'La fecha de fin debe ser posterior a la fecha de inicio', 'error');
			return;
		}

		const eventToUpdate = {
			...this.formEvent,
			entrepreneurshipeventregistry: []
		};

		this.eventService.updateEvent(eventToUpdate).subscribe(
			(response) => {
				Swal.fire('Guardado', 'El bazar ha sido modificado', 'success');
				this.router.navigate(['/bazares']);
			},
			(error) => {
				Swal.fire('Error', 'No se pudo actualizar el bazar', 'error');
				console.error(error);
			}
		);
	}
}
