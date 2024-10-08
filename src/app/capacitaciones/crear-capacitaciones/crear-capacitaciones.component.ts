import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitacionesService } from 'src/app/service/capacitaciones.service';
import { Course } from 'src/app/model/course';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-capacitaciones',
  templateUrl: './crear-capacitaciones.component.html',
  styleUrls: ['./crear-capacitaciones.component.css']
})
export class CrearCapacitacionesComponent {
  sendCourse: Course;
  formCourse: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CapacitacionesService
  ) {
    this.sendCourse = {
      id: 0,
      link: '',
      description: '',
      score: 0,
      date: new Date(),
      title: '',
      places: 0,
      modality: '',
    };

    this.formCourse = {
      id: 0,
      link: '',
      description: '',
      score: 0,
      date: new Date(),
      title: '',
      places: 0,
      modality: '',
    };
  }

  crear() {
    this.sendCourse = Object.assign({}, this.formCourse);
    console.log(this.sendCourse);

    this.courseService.addCourse(this.sendCourse).subscribe(
      (response) => {
        // Si es exitoso, se redirige
        Swal.fire({
          icon: 'success',
          title: 'Capacitación creada con éxito',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/capacitaciones']);
        });
      },
      (error) => {
        // El error ya se maneja en el servicio, no redirigir en caso de error
        console.error('Error al crear capacitación', error);
      }
    );
  }
}
