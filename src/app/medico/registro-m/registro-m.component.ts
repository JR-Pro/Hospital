import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Medico} from 'src/app/medico';
import { MedicosService } from 'src/app/servicie/medicos/medicos.service';


@Component({
  selector: 'app-registro-m',
  templateUrl: './registro-m.component.html',
  styleUrls: ['./registro-m.component.css']
})
export class RegistroMComponent implements OnInit {

  Medico : Medico = new Medico();

  constructor(private medicoService:MedicosService, private router:Router) { }

  ngOnInit(): void {
  }

  irAListaMedicos(){
    this.router.navigate(['listMedic'])
  }

  onSubmit(){
    this.medicoService.registrarm(this.Medico).subscribe(dato=>{

      this.irAListaMedicos();
    })
  }
}

