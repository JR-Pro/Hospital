import { Component, OnInit } from '@angular/core';
import { Consulta } from '../consulta';
import { ConsultaService } from '../servicie/consulta/consulta.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  list1: Consulta[];

  constructor(private consultaService:ConsultaService, private router:Router) { }

  ngOnInit(): void {
    this.obtener();
  }
  
  irACrear(){
    this.router.navigate(['/anadirc']);
  }

  private obtener(){
    this.consultaService.Obtenerlist().subscribe(dato => {
      console.log(dato);
      this.list1 = dato;
    });
  }

}
