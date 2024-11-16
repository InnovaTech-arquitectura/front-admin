import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { CapacitacionesService } from 'src/app/service/capacitaciones.service';

@Component({
  selector: 'app-ver-info-capacitaciones',
  templateUrl: './ver-info-capacitaciones.component.html',
  styleUrls: ['./ver-info-capacitaciones.component.css']
})
export class VerInfoCapacitacionesComponent implements OnInit {
  formCourse: Course;
  formattedDate: string = ''; // Nueva propiedad para almacenar la fecha como string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CapacitacionesService
  ) {
    this.formCourse = {
      id: 0,
      link: '',
      description: '',
      score: 0,
      date: new Date(), // Mantiene el tipo Date
      title: '',
      places: 0,
      modality: '',
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.courseService.findCourse(id).subscribe((data) => {
        this.formCourse = data;

        // Convertimos la fecha en string en formato yyyy-MM-dd
        const fecha = new Date(data.date);
        this.formattedDate = fecha.toISOString().split('T')[0]; // Asignamos la fecha formateada
      });
    });
  }
}
