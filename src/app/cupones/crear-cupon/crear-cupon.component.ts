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
	coupon: Coupon = {
		id: null,
		descripcion: '',
		descuento: '',
		plan: '',
		validez: 0,
		codigo: ''
	};

	constructor(
		private couponService: CuponesService,
		private router: Router
	) {}

	addCoupon() {
		this.couponService.createCoupon(this.coupon).subscribe((response) => {
			console.log('Coupon created:', response);
			this.router.navigate(['/cupones']);
		});
	}
}
