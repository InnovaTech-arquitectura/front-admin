import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planes } from '../model/planes';
import { Functionalities } from '../model/functionalities';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Planes[]>{
    return this.http.get<Planes[]>('http://localhost:8090/plan/all');
  }
}
