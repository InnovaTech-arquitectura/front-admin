import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {
  private apiURL = environment.baseApiUrl +'/questions';

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiURL, { headers });
  }

  getAnswer(id: number): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get(this.apiURL + "/" + id + "/answer", { headers, responseType: 'text' });
  }

  delete(id: number): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.delete(this.apiURL + "/" + id, { headers, responseType: 'text' });
  }

  update(id: number): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.put(this.apiURL + "/" + id, {}, { headers, responseType: 'text'  });
  }

  create(question: string): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.post(this.apiURL, { headers, responseType: 'text' });
  }

}
