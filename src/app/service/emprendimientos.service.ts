import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Emprendimiento } from '../model/emprendimiento';


@Injectable({
  providedIn: 'root'
})
export class EmprendimientosService {
  private apiUrl = environment.baseApiUrl + '/finance/all';

  constructor(private http: HttpClient) { }

  getEmprendimientos(): Observable<Emprendimiento[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Emprendimiento[]>(this.apiUrl, { headers });
  }
}
