import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuponesService } from 'src/app/service/cupones.service';
import { Coupon } from 'src/app/model/coupon';

@Component({
	selector: 'app-editar-cupon',
	templateUrl: './editar-cupon.component.html',
	styleUrls: ['./editar-cupon.component.css']
})
export class EditarCuponComponent implements OnInit {
	couponForm: FormGroup;
	couponId: number;
	coupon: Coupon;

	constructor(
		private route: ActivatedRoute,
		private couponService: CuponesService,
		private fb: FormBuilder,
		private router: Router
	) {
		this.couponForm = this.fb.group({
			descripcion: ['', Validators.required],
			descuento: ['', Validators.required],
			plan: ['', Validators.required],
			validez: [0, Validators.required],
			codigo: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		this.couponId = Number(this.route.snapshot.paramMap.get('id'));

		this.couponService.getCouponById(this.couponId).subscribe(
			(data: Coupon) => {
				this.coupon = data;
				this.couponForm.patchValue(this.coupon);
			},
			(error) => {
				console.error('Error al cargar el cupón', error);
			}
		);
	}

	onSubmit(): void {
		if (this.couponForm.valid) {
			const updatedCoupon: Coupon = this.couponForm.value;
			this.couponService.updateCoupon(this.couponId, updatedCoupon).subscribe(
				(response) => {
					console.log('Cupón actualizado exitosamente', response);
					this.router.navigate(['/cupones']);
				},
				(error) => {
					console.error('Error al actualizar el cupón', error);
				}
			);
		} else {
			console.log('El formulario no es válido');
		}
	}
}
