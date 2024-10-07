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

	findAll(): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<any>(this.apiURL + '/all', { headers });
	}

	//! creo
	getCouponById(id: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<any>(this.apiURL + '/' + id, { headers });
	}

	createCoupon(coupon: NewCoupon): Observable<any> { 
		const token = localStorage.getItem('token'); // Obtener el token si es necesario
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Agregar autorización si es necesario
		
		return this.http.post<NewCoupon>(this.apiURL + '/add', coupon, { headers });
	}

	//! revisar
	updateCoupon(coupon: NewCoupon): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.put(this.apiURL + '/update', coupon, { headers });
	}

	deleteCoupon(id: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		
		// Retornamos el observable de la petición HTTP de eliminación
		return this.http.delete(this.apiURL + '/delete/' + id, { headers, responseType: 'text' });
	  }
}
