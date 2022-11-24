import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Medico } from 'src/app/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private baseURL = "http://localhost:8080/medicos"

  constructor( private httClient: HttpClient) { }

  Obtenerlist(): Observable<Medico[]>{
    return this.httClient.get<Medico[]>(this.baseURL)
  }
  
  registrar(medico:Medico): Observable<Object>{
    return this.httClient.post((this.baseURL), medico);
  }
  
}
