import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/service/events.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
	selector: 'app-detalles-bazar',
	templateUrl: './detalles-bazar.component.html',
	styleUrls: ['./detalles-bazar.component.css']
})
export class DetallesBazarComponent implements OnInit {
	event: any;
	entrepreneurshipEvents: any[] = [];
	paginatedEntrepreneurshipEvents: any[] = [];

	length = 0;
	pageSize = 4;
	pageIndex = 0;

	constructor(
		private eventService: EventsService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		const eventId = this.route.snapshot.paramMap.get('id');

		this.eventService.getEventDetails(Number(eventId)).subscribe(
			(data: any) => {
				this.event = data;
				this.entrepreneurshipEvents = this.event.entrepreneurshipeventregistry || [];
				this.length = this.entrepreneurshipEvents.length;
				this.paginarEntrepreneurshipEvents();
			},
			(error) => {
				console.error('Error al cargar el evento:', error);
			}
		);
	}

	handlePageEvent(event: PageEvent): void {
		this.pageIndex = event.pageIndex;
		this.pageSize = event.pageSize;
		this.paginarEntrepreneurshipEvents();
	}

	paginarEntrepreneurshipEvents(): void {
		const startIndex = this.pageIndex * this.pageSize;
		const endIndex = startIndex + this.pageSize;
		this.paginatedEntrepreneurshipEvents = this.entrepreneurshipEvents.slice(startIndex, endIndex);
	}

	getEntrepreneurshipDetails(entrepreneurshipId: number): void {
		this.eventService.getEntrepreneurshipDetails(entrepreneurshipId).subscribe((data: any) => {
			console.log('Detalles del emprendimiento:', data);
		});
	}
}
