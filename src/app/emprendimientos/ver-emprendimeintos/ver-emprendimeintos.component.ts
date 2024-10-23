import { Component, OnInit } from '@angular/core';
import { EmprendimientosService } from 'src/app/service/emprendimientos.service';

@Component({
  selector: 'app-ver-emprendimeintos',
  templateUrl: './ver-emprendimeintos.component.html',
  styleUrls: ['./ver-emprendimeintos.component.css']
})
export class VerEmprendimeintosComponent implements OnInit {
  emprendimientos: any[] = [];

  constructor(private emprendimientosService: EmprendimientosService) {}

  ngOnInit(): void {
    this.loadEmprendimientos();
  }

  loadEmprendimientos(): void {
    this.emprendimientosService.getEmprendimientos().subscribe(data => {
      this.emprendimientos = data;
    });
  }
}
