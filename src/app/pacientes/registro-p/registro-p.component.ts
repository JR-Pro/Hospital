import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Paciente, Pacientes } from 'src/app/pacientes';
import { PacienteService } from 'src/app/servicie/paciente.service';

@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.component.html',
  styleUrls: ['./registro-p.component.css']
})
export class RegistroPComponent implements OnInit {


  paciente : Paciente = new Paciente();

  private editar: boolean = false;
  
  hayError: boolean = false;
  errorMessage : string = '';


  constructor(private pacienteService:PacienteService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((dato) => {
      console.log(dato);
      if(dato['dato']== 'editar') {
        this.paciente = this.pacienteService.paciente;
        this.editar =true;
      }
      else{
        this.editar = false;
      }
      
    })
    //console.log('anadir p');
  }
  // guardarP(){
  //   this.pacienteService.registrarP(this.paciente).subscribe(dato =>{
  //     console.log(dato);
  //     //this.irALaListaPacientes();
  //   },error=> console.log(error));
  // }
  
  irALaListaPacientes(){
    this.router.navigate(['/listPacie']);
  }

  onSubmit(){

    if (this.validador()) {
      if (this.editar) {
        this.pacienteService.actualizarP(this.paciente).subscribe( data => {
          console.log(data);
          this.irALaListaPacientes();
        });
      }
      else {
        this.pacienteService.registrarP(this.paciente).subscribe(dato =>{
          console.log(dato);
          this.irALaListaPacientes();
        },error=> console.log(error));
      }
    }

  
   
  }

  private validador() : boolean{
    this.hayError = false;
    this.errorMessage = '';

    try {
      console.log(this.paciente);
      if(!this.paciente.nombres){
        this.hayError = true;
      this.errorMessage = 'Información incompleta';
  
      return false
      }
      if (this.paciente.nombres.length< 3 || this.paciente.nombres.trim() =='' ) {
        this.hayError = true;
        this.errorMessage = 'Nombre no valido o campo en blanco';
  
  
        return false;
      }
      else if (this.paciente.apellidos.length< 3 || this.paciente.apellidos.trim() =='') {
        this.hayError = true;
        this.errorMessage = 'Apellido no valido o campo en blanco';
  
        return false;
      }
      else if (this.paciente.dni.toString().length< 8 || this.paciente.dni.toString() =='') {
        this.hayError = true;
        this.errorMessage = 'DNI no valido, se necesitan 8 digitos  o campo en blanco';
  
        return false;
      }
      else if (this.paciente.direccion.length< 3 || this.paciente.direccion.trim() =='') {
        this.hayError = true;
        this.errorMessage = 'Direccion no valido o campo en blanco';
  
        return false;
      }
      else if (this.paciente.telefono.toString().length< 9 || this.paciente.telefono.toString() =='') {
        this.hayError = true;
        this.errorMessage = 'telefono no valido, se necesitan 9 digitos o campo en blanco';
  
        return false;
      }
      this.errorMessage = '';
      return true;
    } catch (error) {
      this.hayError = true;
      this.errorMessage = 'Información incompleta';
      return false;
    }
   
  }

}
