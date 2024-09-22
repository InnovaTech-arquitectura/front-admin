import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-capacitaciones',
  templateUrl: './editar-capacitaciones.component.html',
  styleUrls: ['./editar-capacitaciones.component.css']
})
export class EditarCapacitacionesComponent {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
    });
  }
}
