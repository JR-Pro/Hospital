import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from '../medico';
import { MedicosService } from '../servicie/medicos/medicos.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  list: Medico[];

  constructor(private medicoService:MedicosService, private router: Router) { }

  ngOnInit(): void {
    this.obtener();
  }
//Este método sirve cómo un routerlink, para añadir a alguna ruta que quiera ir
  irACrear(){
    this.router.navigate(['/añadirP']);
  }


  private obtener(){
    this.medicoService.Obtenerlist().subscribe(dato => {
      console.log(dato);
      this.list = dato;
    });
  }
}
