import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planes } from '../model/planes';
import { Functionalities } from '../model/functionalities';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  private apiURL = 'http://localhost:8090/plan';

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiURL + '/all', { headers });
  }

  findById(id: number): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiURL + '/' + id, { headers });
  }

  updatePlan(plan: Planes) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.put(this.apiURL + '/update', plan, {headers}).subscribe();
  }

  addPlan(plan: Planes) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.post(this.apiURL + '/add', plan, {headers}).subscribe();
  }

  deletePlan(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    this.http.delete(this.apiURL + '/delete/' + id, { headers, responseType: 'text' })
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error); 
      });
  }
}
