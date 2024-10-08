import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Course } from '../model/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  private apiURL = environment.baseApiUrl + '/course';

  constructor(private http: HttpClient) { }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Ocurrió un error inesperado. Por favor, intenta de nuevo.';
    
    if (error.status === 400) {
      errorMessage = 'Solicitud incorrecta. Verifica los datos ingresados. Recuerda:(1) Todos los campos son obligatorios (2) Los cupos deben ser mayores a 1 (3) La fecha debe ser mayor a la actual';
    } else if(error.status === 401){
      errorMessage= 'Error al crear capacitación'
    }else if (error.status === 404) {
      errorMessage = 'El recurso solicitado no se encuentra.';
    } else if (error.status === 500) {
      errorMessage = 'Error del servidor. Intenta nuevamente más tarde.';
    }

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: errorMessage,
    });

    return throwError(errorMessage);
  }

  findAll(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiURL + '/all', { headers }).pipe(
      catchError(this.handleError)
    );
  }

  findCourse(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiURL + '/' + id, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  updateCourse(course: Course): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(this.apiURL + '/' + course.id, course, { headers, responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }

  addCourse(course: Course): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiURL + '/new', course, { headers, responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }

  deleteCourse(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(this.apiURL + "/" + id, { headers, responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }
}
