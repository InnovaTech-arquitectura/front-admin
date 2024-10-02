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
}
