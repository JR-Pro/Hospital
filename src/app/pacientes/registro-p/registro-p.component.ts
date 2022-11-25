import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Paciente, Pacientes } from 'src/app/pacientes';
import { PacienteService } from 'src/app/servicie/paciente.service';

@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.component.html',
  styleUrls: ['./registro-p.component.css']
})
export class RegistroPComponent implements OnInit {


  Paciente : Paciente = new Paciente();


  constructor(private pacienteService:PacienteService, private router:Router) { }

  ngOnInit(): void {
    console.log('anadir p');
  }

  guardarP(){
    this.pacienteService.registrarP(this.Paciente).subscribe(dato =>{
      console.log(dato);
      //this.irALaListaPacientes();
    },error=> console.log(error));
  }

  irALaListaPacientes(){
    this.router.navigate(['/listPacie']);
  }

  onSubmit(){
    this.pacienteService.registrarP(this.Paciente).subscribe(dato =>{
      console.log(dato);
      this.irALaListaPacientes();
    },error=> console.log(error));
  }
}
