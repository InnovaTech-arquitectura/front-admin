import { Component, OnInit } from '@angular/core';
import { PqrsService } from 'src/app/service/pqrs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soporte-principal',
  templateUrl: './soporte-principal.component.html',
  styleUrls: ['./soporte-principal.component.css']
})
export class SoportePrincipalComponent implements OnInit {

  constructor(
    private pqrsService: PqrsService
  ) { }

  preguntas: string[];

  ngOnInit(): void {
    this.pqrsService.findAll().subscribe(
      (response) => {
        console.log(response);
        this.preguntas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(id: number){

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
        this.pqrsService.delete(id).subscribe(
          (response) => {
            console.log("Index: ", id, response);
            this.preguntas.splice(id, 1);

            Swal.fire({
              title: 'Eliminado',
              text: 'El plan ha sido eliminado correctamente.',
              icon: 'success',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#19647e'
            });
          }
        );
      }
    });
  }
}
