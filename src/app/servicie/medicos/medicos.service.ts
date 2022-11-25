import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from "rxjs";
import { Medico } from 'src/app/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private baseURL = "http://localhost:8080/medicos"

  constructor( private httpClient: HttpClient) { }

  Obtenerlist(): Observable<Medico[]>{
    return this.httpClient.get<Medico[]>(this.baseURL)
  }

 
  
  registrar(medico:Medico): Observable<Object>{
    return this.httpClient.post((this.baseURL), medico);
  }
  
}
