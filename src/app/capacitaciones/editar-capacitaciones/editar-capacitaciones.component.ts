import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { CapacitacionesService } from 'src/app/service/capacitaciones.service';

@Component({
  selector: 'app-editar-capacitaciones',
  templateUrl: './editar-capacitaciones.component.html',
  styleUrls: ['./editar-capacitaciones.component.css']
})
export class EditarCapacitacionesComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CapacitacionesService
  ) { 
      this.editCourse =  {
        id: 0,
        link: '',
        description: '',
        score: 0,
        date: new Date(),
        title: '',
        places: 0,
        modality: '',
        
      }

      this.formCourse =  {
        id: 0,
        link: '',
        description: '',
        score: 0,
        date: new Date(),
        title: '',
        places: 0,
        modality: '',
      }
  }
  editCourse: Course;
	formCourse: Course;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.courseService.findCourse(id).subscribe((data) => {
				this.formCourse = data;
				console.log(this.formCourse);
      });
    });
  
  }
  
  guardar() {
    this.editCourse = Object.assign({}, this.formCourse);
    console.log(this.editCourse);

    this.courseService.updateCourse(this.editCourse);

    this.router.navigate(['/capacitaciones']);
  }
}
