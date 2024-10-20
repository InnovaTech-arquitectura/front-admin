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
		this.eventForm = Object.assign({}, this.eventForm.value);
		console.log(this.eventForm);
		this.eventService.addEvent(this.eventForm);
		this.router.navigate(['/bazares']);
	}
}
