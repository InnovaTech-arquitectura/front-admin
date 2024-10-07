import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/model/coupon';
import { CuponesService } from 'src/app/service/cupones.service';

@Component({
	selector: 'app-crear-cupon',
	templateUrl: './crear-cupon.component.html',
	styleUrls: ['./crear-cupon.component.css']
})
export class CrearCuponComponent {
	constructor(
		private couponService: CuponesService,
		private router: Router
	) {}

	addCoupon() {
		
	}
}
