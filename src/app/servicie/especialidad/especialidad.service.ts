import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Especialidad } from 'src/app/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  
  private baseURL = "http://localhost:8080/especialidades"

  constructor( private httClient: HttpClient) { }
//Obtener la lista de las espcecialidades
  Obtenerlist(): Observable<Especialidad[]>{
    return this.httClient.get<Especialidad[]>(`${this.baseURL}`);
  }
  
  registrar(especialidad:Especialidad): Observable<Object>{
    return this.httClient.post((this.baseURL), especialidad);
  }
  

}
