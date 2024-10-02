import { Component, OnInit } from '@angular/core';
import { Planes } from 'src/app/model/planes';
import { PlanesService } from 'src/app/service/planes.service';

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
        console.log(this.planList);
      }
    );
  }

  deletePlan(id: number){
    this.planesService.deletePlan(id);
    
    const index = this.planList.findIndex((plan) => plan.id === id);
    this.planList.splice(index, 1);
  }
}
