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

  listaPLanes?: Planes[];
  
  ngOnInit(): void {
    this.planesService.findAll().subscribe(data => {
      this.listaPLanes = data;
    });

    console.log("Hola\n" + this.listaPLanes);
  }
}
