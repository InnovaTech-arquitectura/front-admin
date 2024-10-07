import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
	selector: 'app-ver-bazares',
	templateUrl: './ver-bazares.component.html',
	styleUrls: ['./ver-bazares.component.css']
})
export class VerBazaresComponent implements OnInit {
	bazares: any[] = [];
	paginatedBazares: any[] = [];

	length = 0;
	pageSize = 4;
	pageIndex = 0;

	constructor(private eventService: EventsService) {}

	ngOnInit(): void {
		this.pageIndex = 0;
		console.log(this.pageIndex);
		this.getBazares(this.pageIndex, this.pageSize);
		console.log(this.length);
	}

	getBazares(pageIndex: number, pageSize: number): void {
		this.eventService.getBazares(pageIndex, pageSize).subscribe((data: any) => {
			console.log(data);
			this.bazares = data.content;
			this.length = data.totalElements;
		});
	}

	handlePageEvent(event: PageEvent): void {
		this.pageIndex = event.pageIndex;
		this.pageSize = event.pageSize;
		this.getBazares(this.pageIndex, this.pageSize);
	}

	paginarBazares(): void {
		const startIndex = this.pageIndex * this.pageSize;
		const endIndex = startIndex + this.pageSize;
		this.paginatedBazares = this.bazares.slice(startIndex, endIndex);
	}

	delete(id: number): void {
		this.eventService.deleteEvent(id).subscribe(() => {
			this.getBazares(this.pageIndex, this.pageSize);
		});
	}
}
