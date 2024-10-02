import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/service/events.service';
import { Events as BazarEvent } from 'src/app/model/events';

@Component({
	selector: 'app-detalles-bazar',
	templateUrl: './detalles-bazar.component.html',
	styleUrls: ['./detalles-bazar.component.css']
})
export class DetallesBazarComponent implements OnInit {
	event: BazarEvent | null = null;

	constructor(
		private eventService: EventsService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.eventService.findById(id).subscribe(
			(data) => {
				this.event = data;
				console.log('Event data:', this.event);
			},
			(error) => {
				console.error('Error fetching event details', error);
			}
		);
	}
}
