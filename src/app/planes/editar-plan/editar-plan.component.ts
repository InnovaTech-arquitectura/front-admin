import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Functionalities } from 'src/app/model/functionalities';
import { Planes } from 'src/app/model/planes';
import { PlanesService } from 'src/app/service/planes.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-editar-plan',
	templateUrl: './editar-plan.component.html',
	styleUrls: ['./editar-plan.component.css']
})
export class EditarPlanComponent {
	constructor(
		private route: ActivatedRoute,
		private planesService: PlanesService,
		private router: Router
	) {
		this.editPlan = {
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

	editPlan: Planes;
	formPlan: Planes;

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			const id = Number(params.get('id'));

			this.planesService.findById(id).subscribe((data) => {
				this.formPlan = data;
				//console.log(this.formPlan);
			});
		});

		this.planesService.findFuncionalities().subscribe((data) => {
			this.allFunc = data;
			//console.log(this.allFunc);
		});
	}

	isChecked(func: Functionalities): boolean {
		for (let i = 0; i < this.formPlan.functionalities.length; i++) {
			const funcList = this.formPlan.functionalities[i];
			if (func.id === funcList.id) {
				return true;
			}
		}
		return false;
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

	guardar() {
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

			this.editPlan = Object.assign({}, this.formPlan);
			//console.log(this.editPlan);

			this.planesService.updatePlan(this.editPlan).subscribe(
				(response) => {
					// Si la petición es exitosa, no hacemos nada extra
					//console.log('Actualización exitosa', response);
					this.router.navigate(['/planes']); // Navegamos a la ruta /planes
				},
				(error) => {
					// Si ocurre un error, mostramos el pop-up de SweetAlert
					Swal.fire({
						title: 'Error al guardar',
						text: 'Hubo un problema al intentar guardar los cambios. Por favor, intenta nuevamente.',
						icon: 'error',
						confirmButtonText: 'Aceptar',
						confirmButtonColor: '#e15554'
					});
					//console.error(error);
				}
			);
		}
	}
}
