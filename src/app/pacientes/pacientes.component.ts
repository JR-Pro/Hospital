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

  //Función para poder ver los datos y mostrarlos(Tabla pacientes) en la clase obtener//Guarda los datos que tiene en la lista por medio del metodo
  private obtener(){
    this.pacienteService.Obtenerlist().subscribe(dato => {
      console.log(dato);
      this.lista = dato;
    });
  }
  eliminarPaciente(paciente: Paciente){
   this.pacienteService.eliminarP(paciente.idPaciente).subscribe(data => {
    this.obtener();
   })
  }
  editarPaciente(paciente: Paciente){

    this.pacienteService.paciente = paciente;
    this.router.navigate(['/añadirP/editar']);
    //console.log(`Aqui Elimino a ${paciente.nombres}`);

  }

  onClick(paciente: Paciente ){
    console.log(paciente);
  }
  

}
