import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class PublicidadService {
	private apiURL = environment.baseApiUrl + '/banner';

	constructor(private http: HttpClient) {}

	createBanner(formData: FormData): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		//console.log(localStorage.getItem('token'));

		return this.http.post<any>(`${this.apiURL}/new`, formData, { headers });
	}

	listBanners(page: number = 1, limit: number = 20): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<any>(`${this.apiURL}/all?page=${page}&limit=${limit}`, { headers });
	}

	findBanner(id: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.get<any>(`${this.apiURL}/${id}`, { headers });
	}

	updateBanner(id: number, formData: FormData): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.put<any>(`${this.apiURL}/${id}`, formData, { headers });
	}

	deleteBanner(id: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.delete(`${this.apiURL}/${id}`, { headers, responseType: 'text' });
	}
	getBannerById(id: string): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
	
		return this.http.get<any>(`${this.apiURL}/${id}`, { headers });
	}
	
	 
}
