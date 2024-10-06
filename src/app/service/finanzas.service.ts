import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanzasService {
  private apiUrl = 'http://localhost:8090/finance'; // URL base de tu API

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}` // Incluir el token en el encabezado
    });
  }

  getIncomeByYear(year: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/incomeByYear?year=${year}`, { headers: this.getHeaders() });
  }

  getExpensesByYear(year: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/expensesByYear?year=${year}`, { headers: this.getHeaders() });
  }

  getIncomeByPlan(year: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/incomeByPlan?year=${year}`, { headers: this.getHeaders() });
  }

  getUsersByPlan(year: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usersByPlan?year=${year}`, { headers: this.getHeaders() });
  }
}
