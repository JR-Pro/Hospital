import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidad } from '../especialidad';
import { EspecialidadService } from '../servicie/especialidad/especialidad.service';

@Component({
  selector: 'app-especialidaddes',
  templateUrl: './especialidaddes.component.html',
  styleUrls: ['./especialidaddes.component.css']
})
export class EspecialidaddesComponent implements OnInit {

  lis: Especialidad[];

  constructor(private especialidadService:EspecialidadService, private router:Router) { }

  ngOnInit(): void {
    this.obtener();
  }

  irACrear(){
    this.router.navigate(['/anadire']);
  }
  private obtener(){
    this.especialidadService.Obtenerlist().subscribe(dato => {
      this.lis = dato;
    });
  }

}
