import { Component, OnInit } from '@angular/core';
import { Pacientes } from '../pacientes';
import { PacienteService } from '../servicie/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  lista: Pacientes[];

  constructor(private pacienteService:PacienteService) { }

  ngOnInit(): void {
    this.obtener();
  }

  private obtener(){
    this.pacienteService.Obtenerlist().subscribe(dato => {
      this.lista = dato;
    });
  }

}
