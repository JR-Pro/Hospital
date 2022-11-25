import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente, Pacientes } from '../pacientes';
import { PacienteService } from '../servicie/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  lista: Paciente[];

  constructor(private pacienteService:PacienteService, private router: Router) { }

  ngOnInit(): void {
    this.obtener();
  }
  
  irACrear(){
    this.router.navigate(['/añadirP']);
  }

  //Función para poder ver los datos y mostrarlos(Tabla pacientes) en la clase obtener 
  private obtener(){
    this.pacienteService.Obtenerlist().subscribe(dato => {
      console.log(dato);
      this.lista = dato;
    });
  }

}
