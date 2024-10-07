import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coupon } from '../model/coupon';

@Injectable({
	providedIn: 'root'
})
export class CuponesService {
	private apiURL = environment.baseApiUrl + '/cupones';

	constructor(private http: HttpClient) {}

	getCoupons(): Observable<Coupon[]> {
		return this.http.get<Coupon[]>(`${this.apiURL}`);
	}

	getCouponById(id: number): Observable<Coupon> {
		return this.http.get<Coupon>(`${this.apiURL}/${id}`);
	}

	createCoupon(coupon: Coupon): Observable<Coupon> {
		return this.http.post<Coupon>(this.apiURL, coupon);
	}

	updateCoupon(id: number, coupon: Coupon): Observable<Coupon> {
		return this.http.put<Coupon>(`${this.apiURL}/${id}`, coupon);
	}

	deleteCoupon(id: number): Observable<void> {
		return this.http.delete<void>(`${this.apiURL}/${id}`);
	}
}
