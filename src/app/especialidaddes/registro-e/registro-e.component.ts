import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Especialidad } from 'src/app/especialidad';
import { EspecialidadService } from 'src/app/servicie/especialidad/especialidad.service';

@Component({
  selector: 'app-registro-e',
  templateUrl: './registro-e.component.html',
  styleUrls: ['./registro-e.component.css']
})
export class RegistroEComponent implements OnInit {

  especialidad : Especialidad = new Especialidad();
 
  constructor(private especialidadService:EspecialidadService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  
}
