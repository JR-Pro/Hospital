import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Paciente, Pacientes } from '../pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "http://localhost:8080/pacientes";
  paciente: Paciente = new Paciente();

  constructor( private httpClient: HttpClient) { }

  //Este método nos sirve para obtener a los pacientes
  Obtenerlist(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(this.baseURL)
  }
//Este método nos sirve para añadir a la tabla de los pacientes guardando los datos en el de tipo Json
  registrarP(paciente:Paciente): Observable<Object>{
    return this.httpClient.post(this.baseURL, paciente);
  }
//Este mmetodo nos sirve para poder eliminar los datos en la tabla cómo en la base de datos
  eliminarP(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  actualizarP(paciente:Paciente): Observable<Object>{
    return this.httpClient.put(this.baseURL, paciente);
  }
}
