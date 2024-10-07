import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/service/events.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
			quota: ['', Validators.required],
			modality: ['', Validators.required],
			place: ['', Validators.required],
			description: ['', Validators.required]
		});
	}
	crear(): void {
		if (this.eventForm.valid) {
			const newEvent = this.eventForm.value;
			this.eventService.addEvent(newEvent).subscribe(
				(response) => {
					console.log('Evento creado:', response);
					this.router.navigate(['/bazares']);
				},
				(error) => {
					console.error('Error al crear el evento:', error);
				}
			);
		}
	}
}
