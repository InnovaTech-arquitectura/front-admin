import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  private apiURL = environment.baseApiUrl + '/course';

  constructor(
    private http: HttpClient
  ) { }
  
  findAll(): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiURL + '/all', { headers });
  }
  findCourse(id: number): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiURL + '/' + id, { headers });
  }
  updateCourse(course: Course) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.put(this.apiURL + '/' + course.id,course, {headers, responseType: 'text'}).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error); 
    });
  }
  addCourse(course: Course) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.post(this.apiURL + '/new', course, {headers, responseType: 'text' })
    .subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error); 
    });
  }
  deleteCourse(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    this.http.delete(this.apiURL + "/" + id, { headers, responseType: 'text' })
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error); 
      });
  }
}
