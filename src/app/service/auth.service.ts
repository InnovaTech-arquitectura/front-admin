import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private apiUrl = environment.baseApiUrl + '/login';

	constructor(private http: HttpClient) {}
	getAdminId(): string | null {
		return localStorage.getItem('adminId');
	}

	login(email: string, password: string): Observable<string> {
		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		const body = JSON.stringify({ email, password });

		// Cambia el responseType a 'text'
		return this.http.post(this.apiUrl, body, { headers, responseType: 'text' }).pipe(
			catchError((error) => {
				console.error('Error en la solicitud:', error);
				return throwError(error);
			})
		);
	}
}
