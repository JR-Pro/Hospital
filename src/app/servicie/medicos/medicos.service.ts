import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Medico } from 'src/app/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private baseURL = "http://localhost:8080/medicos"

  constructor( private httpClient: HttpClient) { }
  //Este método nos sirve para obtener a los pacientes
  Obtenerlist(): Observable<Medico[]>{
    return this.httpClient.get<Medico[]>(this.baseURL)
  }

  registrarm(medico:Medico): Observable<Object>{
    return this.httpClient.post(this.baseURL, medico);
  }
  
}
