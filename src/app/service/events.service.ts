import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Events as BazarEvent } from 'src/app/model/events';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class EventsService {
	private apiURL = environment.baseApiUrl + '/event';

	constructor(private http: HttpClient) {}

	findAll(): Observable<BazarEvent[]> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		return this.http.get<BazarEvent[]>(`${this.apiURL}/all`, { headers });
	}

	findById(id: number): Observable<BazarEvent> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		return this.http.get<BazarEvent>(`${this.apiURL}/${id}`, { headers });
	}

	addEvent(eventData: any): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		
		return this.http.post(this.apiURL + '/add', eventData, { headers, responseType: 'text' });
	}

	updateEvent(event: BazarEvent): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.put(this.apiURL + '/update', event, { headers, responseType: 'text' });
	}

	deleteEvent(id: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

		return this.http.delete(this.apiURL + '/delete/' + id, { headers, responseType: 'text' });
	}
	getEventDetails(id: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		return this.http.get<any>(`${this.apiURL}/${id}`, { headers });
	}
	getBazares(pageIndex: number, pageSize: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		const params = {
			limit: pageSize.toString(),
			page: pageIndex.toString()
		};

		return this.http.get<any>(`${this.apiURL}/all`, { headers, params });
	}

	getEntrepreneurshipDetails(eventId: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		console.log(localStorage.getItem('token'));
		return this.http.get<any>(`${this.apiURL}/${eventId}/entrepreneurships`, { headers });
	}
}
