import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/service/events.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-crear-bazar',
	templateUrl: './crear-bazar.component.html',
	styleUrls: ['./crear-bazar.component.css']
})
export class CrearBazarComponent implements OnInit {
	eventForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private eventService: EventsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.eventForm = this.fb.group({
			name: ['', Validators.required],
			earnings: ['', Validators.required],
			date: ['', Validators.required],
			date2: ['', Validators.required],
			costoLocal: ['', Validators.required],
			modality: ['', Validators.required],
			place: ['', Validators.required],
			description: ['', Validators.required]
		});
	}
	crear(): void {
		const startDate = new Date(this.eventForm.get('date')?.value);
		const endDate = new Date(this.eventForm.get('date2')?.value);
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		startDate.setHours(0, 0, 0, 0);
		endDate.setHours(0, 0, 0, 0);

		if (startDate < today) {
			Swal.fire('Error', 'La fecha de inicio debe ser mayor a la fecha actual', 'error');
			return;
		}

		if (endDate <= startDate) {
			Swal.fire('Error', 'La fecha de fin debe ser posterior a la fecha de inicio', 'error');
			return;
		}

		const formData = {
			...this.eventForm.value,
			totalCost: 100,
			entrepreneurshipeventregistry: []
		};

		this.eventService.addEvent(formData).subscribe(
			(response) => {
				Swal.fire('Creado', 'El bazar ha sido creado', 'success');
				this.router.navigate(['/bazares']);
			},
			(error) => {
				Swal.fire('Error', 'No se pudo crear el bazar', 'error');
				//console.error(error);
			}
		);
	}
}
