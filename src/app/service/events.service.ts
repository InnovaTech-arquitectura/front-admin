import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events as BazarEvent } from 'src/app/model/events'; // Alias para evitar el conflicto con el Event global
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class EventsService {
	private apiURL = environment.baseApiUrl + '/event';

	constructor(private http: HttpClient) {}

	// Método para obtener todos los eventos
	findAll(): Observable<BazarEvent[]> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		return this.http.get<any>(this.apiURL + '/all', { headers });
	}

	// Método para obtener un evento por ID
	findById(id: number): Observable<BazarEvent> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		return this.http.get<BazarEvent>(`${this.apiURL}/${id}`, { headers });
	}

	// Método para añadir un nuevo evento
	addEvent(event: BazarEvent): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		return this.http.post<any>(this.apiURL + '/add', event, { headers });
	}

	// Método para actualizar un evento
	updateEvent(event: BazarEvent): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		return this.http.put<any>(`${this.apiURL}/update`, event, { headers });
	}

	// Método para eliminar un evento
	deleteEvent(id: number): Observable<any> {
		const token = localStorage.getItem('token');
		const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
		return this.http.delete<any>(`${this.apiURL}/delete/${id}`, { headers });
	}
}
