import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { CuponesService } from 'src/app/service/cupones.service';
import { Coupon } from 'src/app/model/coupon';
import { NewCoupon } from 'src/app/model/newCoupon';
import { Planes } from 'src/app/model/planes';
import { Functionalities } from 'src/app/model/functionalities';
import { PlanesService } from 'src/app/service/planes.service';

@Component({
	selector: 'app-editar-cupon',
	templateUrl: './editar-cupon.component.html',
	styleUrls: ['./editar-cupon.component.css']
})
export class EditarCuponComponent implements OnInit {
	
	constructor(
		private route: ActivatedRoute,
		private couponService: CuponesService,
		private planesService: PlanesService,
		private router: Router
	) {
		this.formCoupon = {
			description: '',
			expirationDate: '',
			expirationPeriod: 0,
			entrepreneurshipId: 1,
			functionalityIds: []
		};
	}

	couponId: number;

	formCoupon: NewCoupon;
	sendCoupon: NewCoupon;

	planList: Planes[];
	allFunc: Functionalities[];

	ngOnInit(): void {

		this.route.paramMap.subscribe((params) => {
			const id = Number(params.get('id'));
			this.couponId = id;

			this.couponService.getCouponById(id).subscribe(
				(data) => {
					this.formCoupon.description = data.description;
					this.formCoupon.expirationDate = data.expirationDate;
					this.formCoupon.expirationPeriod = data.expirationPeriod;
					this.formCoupon.entrepreneurshipId = data.entrepreneurship.id;
					
					if(data.plan != null)
						this.formCoupon.planId = data.plan.id;
					else 
						this.formCoupon.planId = null;

					for(let i=0; i<data.couponFunctionalities.length; i++) {
						this.formCoupon.functionalityIds.push(data.couponFunctionalities[i].functionality.id);
					}
					console.log("data: ", data);
					console.log("form: ", this.formCoupon);
			});
		});

		this.planesService.findAll().subscribe((planes) => {
			this.planList = planes.content;
			console.log(this.planList);
		});

		this.planesService.findFuncionalities().subscribe((data) => {
			this.allFunc = data;
			console.log(this.allFunc);
		});
	}

	planChecked(idplan: number): boolean {
		if (this.formCoupon.planId == idplan) {
			return true;
		}
		return false;
	}

	isChecked(func: Functionalities): boolean {
		for (let i = 0; i < this.formCoupon.functionalityIds.length; i++) {
			
			const funcList = this.formCoupon.functionalityIds[i];
			if (func.id === funcList) {
				return true;
			}
		}
    return false;
	}

	save() {
		let dateFromForm = this.formCoupon.expirationDate;
		// Verifica si el campo 'expirationDate' ya contiene una hora (si contiene 'T')
		if (!dateFromForm.includes('T')) {
			let fullDateTime = dateFromForm + 'T23:59:59'; // Agrega la hora en formato 24h
			this.formCoupon.expirationDate = fullDateTime;
		}

		this.sendCoupon = Object.assign({}, this.formCoupon);
		this.sendCoupon.id = this.couponId;

		//Para las funcionalidades
		this.sendCoupon.functionalityIds = [];
		for (let i=0; i<this.allFunc.length; i++) {
			const check = document.getElementById('check-' + (i+1)) as HTMLInputElement;
			if (check) {
			  if (check.checked) {
				this.sendCoupon.functionalityIds.push(this.allFunc[i].id);
			  } 
			}
		  }

		console.log("editado:", this.sendCoupon);

		this.couponService.updateCoupon(this.sendCoupon).subscribe(
			() => {
				this.router.navigate(['/cupones']);
			},
			(error) => {
				console.error(error);
			}
		);
	}
}
