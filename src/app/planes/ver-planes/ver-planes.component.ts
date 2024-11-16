import { Component, OnInit } from '@angular/core';
import { Planes } from 'src/app/model/planes';
import { PlanesService } from 'src/app/service/planes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-planes',
  templateUrl: './ver-planes.component.html',
  styleUrls: ['./ver-planes.component.css']
})
export class VerPlanesComponent implements OnInit {

  constructor(
    private planesService: PlanesService,
  ) { }

  planList!: Planes[];
  
  ngOnInit(): void {
    this.planesService.findAll().subscribe(
      (planes) => {
        this.planList = planes.content;
        //console.log(this.planList);
      }
    );
  }

  deletePlan(id: number){

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
        this.planesService.deletePlan(id).subscribe(
          response => {
            // Eliminación exitosa
            //console.log('Plan eliminado', response);
            
            // Eliminamos el plan de la lista local (en el front)
            const index = this.planList.findIndex((plan) => plan.id === id);
            if (index !== -1) {
              this.planList.splice(index, 1);
            }
  
            // Mostramos el pop-up de éxito
            Swal.fire({
              title: 'Eliminado',
              text: response,
              icon: 'success',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#19647e'
            });
          },
          error => {
            // Si ocurre un error, mostramos el pop-up de error
            Swal.fire({
              title: 'Error',
              text: error.error,
              icon: 'error',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#19647e'
            });
            //console.error(error);
          }
        );
      }
    });
  }
}
