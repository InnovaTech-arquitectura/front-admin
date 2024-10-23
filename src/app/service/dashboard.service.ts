import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = environment.baseApiUrl + '/dashboard'; 

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}` // Incluir el token en el encabezado
    });
  }

  // Método para obtener las finanzas por año
  getFinances(idEntrepreneurship: number, year: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/finances/${idEntrepreneurship}/${year}`, { headers: this.getHeaders() });
  }

  // Método para obtener estadísticas generales por año
  getGeneralStats(idEntrepreneurship: number, year: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/generalStats/${idEntrepreneurship}/${year}`, { headers: this.getHeaders() });
  }
}
