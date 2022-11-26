import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Medico} from 'src/app/medico';
import { MedicosService } from 'src/app/servicie/medicos/medicos.service';


@Component({
  selector: 'app-registro-m',
  templateUrl: './registro-m.component.html',
  styleUrls: ['./registro-m.component.css']
})
export class RegistroMComponent implements OnInit {

  Medico : Medico = new Medico();

  private editar: boolean = false;

  constructor(private medicoService:MedicosService, private router:Router,private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((dato) => {
      console.log(dato);
      if(dato['dato']== 'editar') {
        this.Medico = this.medicoService.medico;
        this.editar =true;
      }
      else{
        this.editar = false;
      }

    })

  }
  onSubmit(){

      if (this.editar) {
        this.medicoService.actualizarM(this.Medico).subscribe( dato => {
          console.log(dato);
          this.irAListaMedicos();
        });
      }
      else {
        this.medicoService.registrarm(this.Medico).subscribe(dato =>{
          console.log(dato);
          this.irAListaMedicos();
        },error=> console.log(error));
      }
    }

//Metodo para poder salir a la tabla de medicos
  irAListaMedicos(){
    this.router.navigate(['listMedic'])
  }

}

