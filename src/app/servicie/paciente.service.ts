import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Pacientes } from '../pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "http://localhost:8080/pacientes"

  constructor( private httClient: HttpClient) { }

  Obtenerlist(): Observable<Pacientes[]>{
    return this.httClient.get<Pacientes[]>(this.baseURL)
  }
  
  registrar(paciente:Pacientes): Observable<Object>{
    return this.httClient.post((this.baseURL), paciente);
  }
  
}
