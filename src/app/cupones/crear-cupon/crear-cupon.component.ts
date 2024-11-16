import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Functionalities } from 'src/app/model/functionalities';
import { NewCoupon } from 'src/app/model/newCoupon';
import { Planes } from 'src/app/model/planes';
import { CuponesService } from 'src/app/service/cupones.service';
import { PerfilesService } from 'src/app/service/perfiles.service';
import { PlanesService } from 'src/app/service/planes.service';

@Component({
	selector: 'app-crear-cupon',
	templateUrl: './crear-cupon.component.html',
	styleUrls: ['./crear-cupon.component.css']
})
export class CrearCuponComponent implements OnInit {
	constructor(
		private couponService: CuponesService,
		private planesService: PlanesService,
		private perfilesService: PerfilesService,
		private router: Router
	) {
		this.formCoupon = {
			description: '',
			expirationDate: '',
			expirationPeriod: 0,
			entrepreneurshipId: 0,
			functionalityIds: []
		};
	}

	planList: Planes[];
	allFunc: Functionalities[];
	shopList: any[] = [];

	formCoupon: NewCoupon;
	sendCoupon: NewCoupon;

	ngOnInit(): void {
		this.planesService.findAll().subscribe((planes) => {
			this.planList = planes.content;
			//console.log(this.planList);
		});

		this.planesService.findFuncionalities().subscribe((data) => {
			this.allFunc = data;
			//console.log(this.allFunc);
		});

		this.perfilesService.findById(9).subscribe(
			(response) => {
			  //console.log(response);
			  for (let i=0; i<response.length; i++){
				this.shopList.push(response[i]);
			  }
			}
		  );
	}

	addCoupon() {
		let dateFromForm = this.formCoupon.expirationDate;
		let fullDateTime = dateFromForm + 'T23:59:59'; //Agrega la hora en formato 24h
		this.formCoupon.expirationDate = fullDateTime;

		this.formCoupon.functionalityIds = [];
		for (let i = 0; i < this.allFunc.length; i++) {
			const check = document.getElementById('check-' + (i + 1)) as HTMLInputElement;
			if (check) {
				if (check.checked) {
					this.formCoupon.functionalityIds.push(this.allFunc[i].id);
				}
			}
		}

		this.sendCoupon = Object.assign({}, this.formCoupon);
		this.sendCoupon.planId = this.formCoupon.planId;
		//console.log("Crea", this.sendCoupon);

		this.couponService.createCoupon(this.sendCoupon).subscribe(
			() => {
				this.router.navigate(['/cupones']);
			},
			(error) => {
				//console.error(error);
			}
		);
	}
}
