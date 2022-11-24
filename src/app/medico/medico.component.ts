import { Component, OnInit } from '@angular/core';
import { Medico } from '../medico';
import { MedicosService } from '../servicie/medicos/medicos.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  list: Medico[];

  constructor(private medicoService:MedicosService) { }

  ngOnInit(): void {
    this.obtener();
  }

  private obtener(){
    this.medicoService.Obtenerlist().subscribe(dato => {
      this.list = dato;
    });
  }
}
