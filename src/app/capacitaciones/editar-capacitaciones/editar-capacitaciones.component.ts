import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { CapacitacionesService } from 'src/app/service/capacitaciones.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-editar-capacitaciones',
	templateUrl: './editar-capacitaciones.component.html',
	styleUrls: ['./editar-capacitaciones.component.css']
})
export class EditarCapacitacionesComponent {
	editCourse: Course;
	formCourse: Course;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private courseService: CapacitacionesService
	) {
		this.editCourse = {
			id: 0,
			link: '',
			description: '',
			score: 0,
			date: new Date(),
			title: '',
			places: 0,
			modality: ''
		};

		this.formCourse = {
			id: 0,
			link: '',
			description: '',
			score: 0,
			date: new Date(),
			title: '',
			places: 0,
			modality: ''
		};
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			const id = Number(params.get('id'));
			this.courseService.findCourse(id).subscribe((data) => {
				// Convertimos la fecha a formato yyyy-MM-dd para que se muestre correctamente en el input de fecha
				const fecha = new Date(data.date);
				const formattedDate = fecha.toISOString().split('T')[0];
				this.formCourse = { ...data, date: formattedDate }; // Asignamos la fecha formateada
			});
		});
	}

	/*guardar() {
		this.editCourse = Object.assign({}, this.formCourse);
		console.log(this.editCourse);

		this.courseService.updateCourse(this.editCourse).subscribe(
			(response) => {
				Swal.fire({
					icon: 'success',
					title: 'Capacitación actualizada con éxito',
					showConfirmButton: false,
					timer: 1500
				}).then(() => {
					this.router.navigate(['/capacitaciones']);
				});
			},
			(error) => {
				console.error('Error al actualizar capacitación', error);
			}
		);
	}*/
	guardar() {
		// Ajustar la fecha ingresada por el usuario al formato UTC
		const localDate = new Date(this.formCourse.date);
		const utcDate = new Date(localDate.getTime() + localDate.getTimezoneOffset() * 60000);

		// Asignar la fecha como objeto Date en lugar de cadena
		this.editCourse = { ...this.formCourse, date: utcDate };

		this.courseService.updateCourse(this.editCourse).subscribe(
			(response) => {
				Swal.fire({
					icon: 'success',
					title: 'Capacitación actualizada con éxito',
					showConfirmButton: false,
					timer: 1500
				}).then(() => {
					this.router.navigate(['/capacitaciones']);
				});
			},
			(error) => {
				console.error('Error al actualizar capacitación', error);
			}
		);
	}
}
