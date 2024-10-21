import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functionalities } from 'src/app/model/functionalities';
import { Planes } from 'src/app/model/planes';
import { PlanesService } from 'src/app/service/planes.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-crear-plan',
	templateUrl: './crear-plan.component.html',
	styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {
	constructor(
		private planesService: PlanesService,
		private router: Router
	) {
		this.sendPlan = {
			id: 0,
			name: '',
			price: 0,
			functionalities: []
		};

		this.formPlan = {
			id: 0,
			name: '',
			price: 0,
			functionalities: []
		};
	}

	allFunc: Functionalities[];

	sendPlan: Planes;
	formPlan: Planes;

	ngOnInit(): void {
		this.planesService.findFuncionalities().subscribe((data) => {
			this.allFunc = data;
			console.log(this.allFunc);
		});
	}

	emptyInputs() {
		if (!this.formPlan.name || this.formPlan.name.trim() === '') {
			Swal.fire({
				title: 'Error',
				text: 'El nombre del plan no puede estar vacío',
				icon: 'error',
				confirmButtonText: 'Aceptar',
				confirmButtonColor: '#e15554'
			});
			return true;
		}

		if (this.formPlan.price === null || this.formPlan.price === undefined || this.formPlan.price <= 0) {
			Swal.fire({
				title: 'Error',
				text: 'El precio del plan debe ser mayor a 0',
				icon: 'error',
				confirmButtonText: 'Aceptar',
				confirmButtonColor: '#e15554'
			});
			return true;
		}

		return false;
	}

	crear() {
		// Revisa si hay inputs vacíos antes de continuar
		if (this.emptyInputs()) {
		} else {
			this.formPlan.functionalities = [];
			for (let i = 0; i < this.allFunc.length; i++) {
				const check = document.getElementById('check-' + (i + 1)) as HTMLInputElement;
				if (check) {
					if (check.checked) {
						this.formPlan.functionalities.push(this.allFunc[i]);
					}
				}
			}

			this.sendPlan = Object.assign({}, this.formPlan);
			console.log(this.sendPlan);

			this.planesService.addPlan(this.sendPlan).subscribe(
				(response) => {
					// Si la petición es exitosa, no hacemos nada extra
					console.log('Plan agregado exitosamente', response);
					this.router.navigate(['/planes']); // Navegamos a la ruta /planes
				},
				(error) => {
					// Si ocurre un error, mostramos el pop-up de SweetAlert
					Swal.fire({
						title: 'Error al agregar el plan',
						text: 'Hubo un problema al intentar agregar el plan. Por favor, intenta nuevamente.',
						icon: 'error',
						confirmButtonText: 'Aceptar',
						confirmButtonColor: '#e15554'
					});
					console.error(error);
				}
			);
		}
	}
}
