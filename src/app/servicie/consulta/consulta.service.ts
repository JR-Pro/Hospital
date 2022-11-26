import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Consulta } from 'src/app/consulta';
@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private baseURL = "http://localhost:8080/consultas"

  constructor( private httClient: HttpClient) { }

  Obtenerlist(): Observable<Consulta[]>{
    return this.httClient.get<Consulta[]>(this.baseURL)
  }
  
  registrarC(consulta:Consulta): Observable<Object>{
    return this.httClient.post((this.baseURL), consulta);
  }
}
