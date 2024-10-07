import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profiles } from '../model/profiles';
import { Users } from '../model/users';
import { UsersCreate } from '../model/userCreate';
import { UsersUpdate } from '../model/userUpdate';
import { RequestUsersUpdate } from '../model/requestUserUpdate';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {
  private apiURL = environment.baseApiUrl + '/profile';

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
  
    return this.http.get<any>(this.apiURL + '/role/' + id, { headers });
  }

  findUserById(id: number): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiURL + '/' + id, { headers });
  }

  updateProfile(profile: RequestUsersUpdate): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    // Retornamos el observable de la petición HTTP para la actualización
    return this.http.put(this.apiURL, profile, { headers, responseType: 'text' });
  }

  addProfile(user: UsersCreate): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    // Retornamos el observable de la petición HTTP para crear el perfil
    return this.http.post(this.apiURL, user, { headers, responseType: 'text' });
  }

  deleteProfile(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    // Retornamos el observable de la petición HTTP de eliminación
    return this.http.delete(this.apiURL + '/' + id, { headers, responseType: 'text' });
  }
}
