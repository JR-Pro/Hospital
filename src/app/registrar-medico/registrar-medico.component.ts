import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from '../medico';
import { MedicosService } from '../servicie/medicos/medicos.service';
@Component({
  selector: 'app-registrar-medico',
  templateUrl: './registrar-medico.component.html',
  styleUrls: ['./registrar-medico.component.css']
})
export class RegistrarMedicoComponent implements OnInit {
   
  medico: Medico = new Medico();
  constructor(private medicoServicio:MedicosService, private router: Router) { }

  ngOnInit(): void {
  }
  guardar(){
    this.medicoServicio.registrar(this.medico).subscribe(dato =>{
      console.log(dato);
      this.irlist();
    });
  }
  irlist(): void{
    this.router.navigate(['/medicos']);
  }
  onSubmit(){
    this.guardar();
  }
}
