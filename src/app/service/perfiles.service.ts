import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profiles } from '../model/profiles';
import { Users } from '../model/users';
import { UsersCreate } from '../model/userCreate';
import { UsersUpdate } from '../model/userUpdate';
import { RequestUsersUpdate } from '../model/requestUserUpdate';

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
  
    return this.http.get<any>(this.apiURL + '/role/' + id, { headers });
  }

  findUserById(id: number): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<any>(this.apiURL + '/' + id, { headers });
  }

  updateProfile(profile: RequestUsersUpdate) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    console.log(profile);
    this.http.put(this.apiURL, profile, { headers, responseType: 'text' })
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error); 
      });
  }

  addProfile(user: UsersCreate) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    this.http.post(this.apiURL, user, { headers, responseType: 'text' })
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error); 
      });
  }

  deleteProfile(id: number) {
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
