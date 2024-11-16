import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CapacitacionesService } from 'src/app/service/capacitaciones.service';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';

@Component({
	selector: 'app-ver-capacitaciones',
	templateUrl: './ver-capacitaciones.component.html',
	styleUrls: ['./ver-capacitaciones.component.css']
})
export class VerCapacitacionesComponent implements OnInit {
	courseList: Course[] = [];
	paginatedCourseList: Course[] = [];
	formattedDates: string[] = []; // Lista para almacenar las fechas formateadas
	paginatedFormattedDates: string[] = []; // Fechas formateadas paginadas
	length = 0;
	pageSize = 4;
	pageIndex = 0;

	constructor(private courseService: CapacitacionesService) {}

	ngOnInit(): void {
		this.loadCourses();
	}

	loadCourses(): void {
		this.courseService.findAll().subscribe((courses) => {
			this.courseList = courses;

			// Formatear las fechas de los cursos
			this.formattedDates = this.courseList.map((course) => {
				const fecha = new Date(course.date);
				return fecha.toISOString().split('T')[0]; // Formato yyyy-MM-dd
			});

			this.length = this.courseList.length;
			this.paginateCourses(); // Dividir la lista en páginas al cargar
		});
	}

	paginateCourses(): void {
		const startIndex = this.pageIndex * this.pageSize;
		const endIndex = startIndex + this.pageSize;
		this.paginatedCourseList = this.courseList.slice(startIndex, endIndex);
		this.paginatedFormattedDates = this.formattedDates.slice(startIndex, endIndex); // Paginación de las fechas
	}

	handlePageEvent(event: PageEvent): void {
		this.pageIndex = event.pageIndex;
		this.pageSize = event.pageSize;
		this.paginateCourses(); // Actualizar la lista paginada al cambiar de página
	}

	deleteCourse(id: number): void {
		Swal.fire({
			title: '¿Estás seguro?',
			text: '¡No podrás revertir esto!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminarlo'
		}).then((result) => {
			if (result.isConfirmed) {
				this.courseService.deleteCourse(id).subscribe(() => {
					const index = this.courseList.findIndex((course) => course.id === id);
					this.courseList.splice(index, 1);
					this.formattedDates.splice(index, 1); // Eliminar también la fecha formateada correspondiente
					this.length = this.courseList.length;
					this.paginateCourses(); // Volver a paginar tras eliminar un elemento
					Swal.fire('Eliminado', 'El curso ha sido eliminado', 'success');
				});
			}
		});
	}
}
