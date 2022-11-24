import { Component, OnInit } from '@angular/core';
import { Consulta } from '../consulta';
import { ConsultaService } from '../servicie/consulta/consulta.service';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  list1: Consulta[];

  constructor(private consultaService:ConsultaService) { }

  ngOnInit(): void {
    this.obtener();
  }

  private obtener(){
    this.consultaService.Obtenerlist().subscribe(dato => {
      this.list1 = dato;
    });
  }

}
