import { Component } from '@angular/core';
import { Coupon } from 'src/app/model/coupon';
import { CuponesService } from 'src/app/service/cupones.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-ver-cupones',
	templateUrl: './ver-cupones.component.html',
	styleUrls: ['./ver-cupones.component.css']
})
export class VerCuponesComponent {
	
	constructor(
		private cuponesService: CuponesService
	) { }

	cuponsList!: Coupon[];

	ngOnInit(): void {
		this.cuponesService.findAll().subscribe(
			(cupones) => {
				this.cuponsList = cupones.content;
				console.log(this.cuponsList);
			}
		);
	}

	delete(id: number) {

		Swal.fire({
			title: '¿Estás seguro?',
			text: "No podrás revertir esta acción",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Sí, eliminar',
				  confirmButtonColor: '#e15554',
			cancelButtonText: 'Cancelar',
			cancelButtonColor: '#91918f',
			reverseButtons: true,
		  }).then((result) => {
			if (result.isConfirmed) {
			  // Si el usuario confirma, llamamos al servicio para eliminar el plan
			  this.cuponesService.deleteCoupon(id).subscribe(
				response => {
				  // Eliminación exitosa
				  console.log('Plan eliminado', response);
				  
				  // Eliminamos el plan de la lista local (en el front)
				  const index = this.cuponsList.findIndex((plan) => plan.id === id);
				  if (index !== -1) {
					this.cuponsList.splice(index, 1);
				  }
		
				  // Mostramos el pop-up de éxito
				  Swal.fire({
					title: 'Eliminado',
					text: 'El plan ha sido eliminado correctamente.',
					icon: 'success',
					confirmButtonText: 'Aceptar',
					confirmButtonColor: '#19647e'
				  });
				},
				error => {
				  // Si ocurre un error, mostramos el pop-up de error
				  Swal.fire({
					title: 'Error',
					text: 'Hubo un problema al eliminar el plan. Por favor, intenta nuevamente.',
					icon: 'error',
					confirmButtonText: 'Aceptar',
					confirmButtonColor: '#19647e'
				  });
				  console.error(error);
				}
			  );
			}
		  });
	}
}
