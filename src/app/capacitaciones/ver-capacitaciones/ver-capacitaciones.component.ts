import { Component } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CapacitacionesService } from 'src/app/service/capacitaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-capacitaciones',
  templateUrl: './ver-capacitaciones.component.html',
  styleUrls: ['./ver-capacitaciones.component.css']
})
export class VerCapacitacionesComponent {

  courseList: Course[] = [];

  constructor(private courseService: CapacitacionesService) { }

  ngOnInit(): void {
    this.courseService.findAll().subscribe(course => {
      this.courseList = course;
    });
  }

  deleteCourse(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.courseService.deleteCourse(id).subscribe(() => {
          console.log('Eliminado', id);
        const index = this.courseList.findIndex((course) => course.id === id);
        this.courseList.splice(index, 1);

        Swal.fire('Eliminado', 'El curso ha sido eliminado', 'success');
        })  
      }
    });
  }
}
