import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coupon } from '../model/coupon';
import { NewCoupon } from '../model/newCoupon';

@Injectable({
	providedIn: 'root'
})
export class CuponesService {
	private apiURL = environment.baseApiUrl + '/coupon';

	constructor(private http: HttpClient) {}

	//! bien
	findAll(): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<any>(this.apiURL + '/all', { headers });
	}

	getCouponById(id: number): Observable<Coupon> {
		return this.http.get<Coupon>(`${this.apiURL}/${id}`);
	}

	//! bien
	createCoupon(coupon: NewCoupon): Observable<any> { 
		const token = localStorage.getItem('token'); // Obtener el token si es necesario
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Agregar autorización si es necesario
		
		return this.http.post<NewCoupon>(this.apiURL + '/add', coupon, { headers });
	}

	updateCoupon(id: number, coupon: Coupon): Observable<Coupon> {
		return this.http.put<Coupon>(`${this.apiURL}/${id}`, coupon);
	}

	//! bien
	deleteCoupon(id: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		
		// Retornamos el observable de la petición HTTP de eliminación
		return this.http.delete(this.apiURL + '/delete/' + id, { headers, responseType: 'text' });
	  }
}
