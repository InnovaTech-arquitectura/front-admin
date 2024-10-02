import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitacionesService } from 'src/app/service/capacitaciones.service';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-crear-capacitaciones',
  templateUrl: './crear-capacitaciones.component.html',
  styleUrls: ['./crear-capacitaciones.component.css']
})
export class CrearCapacitacionesComponent {
  constructor(
		private route: ActivatedRoute,
    private router: Router,
    private courseService: CapacitacionesService
	) {
    this.sendCourse =  {
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
  sendCourse: Course;
	formCourse: Course;
  ngOnInit(): void {
	
  }
  crear() {

    this.sendCourse = Object.assign({}, this.formCourse);
    console.log(this.sendCourse);

    this.courseService.addCourse(this.sendCourse);

    this.router.navigate(['/capacitaciones']);
  }
}
