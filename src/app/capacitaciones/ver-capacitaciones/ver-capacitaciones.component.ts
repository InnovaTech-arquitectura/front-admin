import { Component } from '@angular/core';
import { Course } from 'src/app/model/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitacionesService } from 'src/app/service/capacitaciones.service';

@Component({
  selector: 'app-ver-capacitaciones',
  templateUrl: './ver-capacitaciones.component.html',
  styleUrls: ['./ver-capacitaciones.component.css']
})
export class VerCapacitacionesComponent {
  courseList:Course [] = [];
  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private courseService: CapacitacionesService,
  ) { }

  ngOnInit(): void {
    this.courseService.findAll().subscribe(course => this.courseList = course)
    console.log(this.courseList);
  }
  deleteCourse(id: number){
    this.courseService.deleteCourse(id);
    
    const index = this.courseList.findIndex((plan) => plan.id === id);
    this.courseList.splice(index, 1);
  }

}
