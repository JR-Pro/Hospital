import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/consulta';
import { ConsultaService } from 'src/app/servicie/consulta/consulta.service';

@Component({
  selector: 'app-registro-c',
  templateUrl: './registro-c.component.html',
  styleUrls: ['./registro-c.component.css'],
})
export class RegistroCComponent implements OnInit {
  consulta: Consulta = new Consulta();

  constructor(
    private consultaService: ConsultaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardarP() {
    this.consultaService.registrarC(this.consulta).subscribe((dato) => {
      console.log(dato);
    });
  }
  irALaListaConsulta() {
    this.router.navigate(['/listEspeci']);
  }

  onSubmit() {
    this.consultaService.registrarC(this.consulta).subscribe((dato) => {
      this.irALaListaConsulta();
    });
  }
}
