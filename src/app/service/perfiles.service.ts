import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profiles } from '../model/profiles';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {
  private apiURL = 'http://localhost:8090/profile';

  constructor(
    private http: HttpClient
  ) { }

  findProfiles(): Observable<Profiles[]>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<Profiles[]>(this.apiURL + '/role/all', { headers });
  }

  findById(id: number): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiURL + '/all/10/' + id, { headers });
  }

  deletePlan(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    this.http.delete(this.apiURL + '/' + id, { headers, responseType: 'text' })
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error); 
      });
  }
}
