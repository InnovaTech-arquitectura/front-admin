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
	emprendimientos: any[] = [];
	paginatedEmprendimientos: any[] = [];

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
				this.emprendimientos = this.event.emprendimientos || [];
				this.length = this.emprendimientos.length;
				this.paginarEmprendimientos();
			},
			(error) => {
				console.error('Error al cargar el evento:', error);
			}
		);

		this.getEntrepreneurshipDetails(Number(eventId));
	}

	handlePageEvent(event: PageEvent): void {
		this.pageIndex = event.pageIndex;
		this.pageSize = event.pageSize;
		this.paginarEmprendimientos();
	}

	paginarEmprendimientos(): void {
		const startIndex = this.pageIndex * this.pageSize;
		const endIndex = startIndex + this.pageSize;
		this.paginatedEmprendimientos = this.emprendimientos.slice(startIndex, endIndex);
	}

	getEntrepreneurshipDetails(entrepreneurshipId: number): void {
		this.eventService.getEntrepreneurshipDetails(entrepreneurshipId).subscribe((data: any) => {
			this.emprendimientos = data;
			this.length = this.emprendimientos.length;
			this.paginarEmprendimientos();
		});
	}
}
