import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Paciente, Pacientes } from '../pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "http://localhost:8080/pacientes"

  constructor( private httClient: HttpClient) { }

  //Este método nos sirve para obtener a los pacientes
  Obtenerlist(): Observable<Paciente[]>{
    return this.httClient.get<Paciente[]>(this.baseURL)
  }
//Este método nos sirve para añadir a los pacientes
  registrarP(paciente:Paciente): Observable<Object>{
    return this.httClient.post(this.baseURL, paciente);
  }  
}
