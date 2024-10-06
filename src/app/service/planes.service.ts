import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planes } from '../model/planes';
import { Functionalities } from '../model/functionalities';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  private apiURL = environment.baseApiUrl +'/plan';

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiURL + '/all', { headers });
  }

  findFuncionalities(): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiURL + '/functionality', { headers });
  }

  findById(id: number): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiURL + '/' + id, { headers });
  }

  updatePlan(plan: Planes): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.put(this.apiURL + '/update', plan, { headers, responseType: 'text' });
  }
  

  addPlan(plan: Planes): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    // Retornamos el observable de la petición HTTP
    return this.http.post(this.apiURL + '/add', plan, { headers, responseType: 'text' });
  }

  deletePlan(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    // Retornamos el observable de la petición HTTP de eliminación
    return this.http.delete(this.apiURL + '/delete/' + id, { headers, responseType: 'text' });
  }
}
