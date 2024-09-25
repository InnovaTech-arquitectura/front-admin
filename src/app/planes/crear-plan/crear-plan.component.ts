import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functionalities } from 'src/app/model/functionalities';
import { Planes } from 'src/app/model/planes';
import { PlanesService } from 'src/app/service/planes.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {
  constructor(
		private planesService: PlanesService,
    private router: Router,
	) {
    this.sendPlan =  {
			id: 0,
			name: '',
			price: 0,
			functionalities: []
		}

		this.formPlan =  {
			id: 0,
			name: '',
			price: 0,
			functionalities: []
		}
  }

  allFunc: Functionalities[];

	sendPlan: Planes;
	formPlan: Planes;

  ngOnInit(): void {
		this.planesService.findFuncionalities().subscribe((data) => {
			this.allFunc = data;
			console.log(this.allFunc);
		});
  }

  crear() {
    this.formPlan.functionalities = [];
    for (let i=0; i<this.allFunc.length; i++) {
      const check = document.getElementById('check-' + (i+1)) as HTMLInputElement;
      if (check) {
        if (check.checked) {
          this.formPlan.functionalities.push(this.allFunc[i]);
        } 
      }
    }

    this.sendPlan = Object.assign({}, this.formPlan);
    console.log(this.sendPlan);

    this.planesService.addPlan(this.sendPlan);

    this.router.navigate(['/planes']);
  }
}