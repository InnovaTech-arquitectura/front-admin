import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PqrsService } from 'src/app/service/pqrs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-responder-pregunta',
  templateUrl: './responder-pregunta.component.html',
  styleUrls: ['./responder-pregunta.component.css']
})
export class ResponderPreguntaComponent implements OnInit {
  
  constructor(
    private pqrsService: PqrsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  pregunta: string;
  respuesta: string;
  index: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
			this.index = Number(params.get('index'));

      this.pqrsService.findAll().subscribe((data) => {
        this.pregunta = data[this.index];
      });

      this.pqrsService.getAnswer(this.index).subscribe((data) => {
        this.respuesta = data;
      });

    });
    
  }

  update(): void {
    this.pqrsService.update(this.index).subscribe(
      (response) => {
        console.log("Index: ", this.index, response);
        Swal.fire({
          title: 'Plan editado',
          text: response,
          icon: 'success',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#19647e'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/soporte']);
          }
        });
      },
      error => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al editar la respuesta. Por favor, intenta nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#19647e'
        });
        console.error(error);
      }
    );
  }
}
