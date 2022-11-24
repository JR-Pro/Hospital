import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms"
import { MedicoComponent } from './medico/medico.component'
import { HttpClientModule } from "@angular/common/http";
import { RegistrarMedicoComponent } from './registrar-medico/registrar-medico.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { EspecialidaddesComponent } from './especialidaddes/especialidaddes.component';
import { ConsultaComponent } from './consulta/consulta.component'

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    RegistrarMedicoComponent,
    PacientesComponent,
    EspecialidaddesComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
