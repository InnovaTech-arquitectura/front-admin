import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CapacitacionesService } from 'src/app/service/capacitaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-capacitaciones',
  templateUrl: './ver-capacitaciones.component.html',
  styleUrls: ['./ver-capacitaciones.component.css']
})
export class VerCapacitacionesComponent implements OnInit {

  courseList: Course[] = [];
  formattedDates: string[] = []; // Lista para almacenar las fechas formateadas de cada curso

  constructor(private courseService: CapacitacionesService) { }

  ngOnInit(): void {
    this.courseService.findAll().subscribe(courses => {
      this.courseList = courses;

      // Formatear cada fecha de la lista de cursos
      this.formattedDates = this.courseList.map(course => {
        const fecha = new Date(course.date);
        return fecha.toISOString().split('T')[0]; // Formato yyyy-MM-dd
      });
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
          const index = this.courseList.findIndex((course) => course.id === id);
          this.courseList.splice(index, 1);
          this.formattedDates.splice(index, 1); // Eliminar también la fecha formateada correspondiente

          Swal.fire('Eliminado', 'El curso ha sido eliminado', 'success');
        });
      }
    });
  }
}
